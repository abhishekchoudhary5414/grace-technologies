import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getAdminByUsername, verifyPassword, updateLastLogin } from '@/services/admin.service';
import { signSession, SESSION_COOKIE_NAME } from '@/lib/auth/session';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required').max(100),
  password: z.string().min(1, 'Password is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials or missing fields' },
        { status: 400 }
      );
    }

    const { username, password } = result.data;
    const admin = await getAdminByUsername(username);

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    if (!admin.is_active) {
      return NextResponse.json(
        { success: false, message: 'Account has been deactivated. Please contact support.' },
        { status: 403 }
      );
    }

    const isValid = await verifyPassword(password, admin.password_hash);
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Update last login timestamp in background
    await updateLastLogin(admin.id);

    // Sign session token
    const token = signSession({
      userId: admin.id,
      username: admin.username,
      fullName: admin.full_name || 'Admin',
      role: admin.role || 'admin',
    });

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful',
      user: {
        username: admin.username,
        fullName: admin.full_name,
        role: admin.role,
      },
    });

    // Set secure HTTP-only cookie
    const isProduction = process.env.NODE_ENV === 'production';
    response.cookies.set(SESSION_COOKIE_NAME, token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error during authentication' },
      { status: 500 }
    );
  }
}

