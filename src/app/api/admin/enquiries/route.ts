import { NextResponse, NextRequest } from 'next/server';
import { verifySession, SESSION_COOKIE_NAME } from '@/lib/auth/session';
import { getEnquiries, updateEnquiryStatus, updateEnquiryNotes } from '@/services/enquiry.service';

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySession(token);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search') || undefined;
  const service = searchParams.get('service') || undefined;
  const status = searchParams.get('status') || undefined;
  const sort = (searchParams.get('sort') as 'newest' | 'oldest') || 'newest';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

  const result = await getEnquiries({ search, service, status, sort, page, pageSize });
  return NextResponse.json(result);
}

export async function PATCH(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySession(token);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json({ error: 'Missing enquiry ID' }, { status: 400 });
    }

    if (status !== undefined) {
      const res = await updateEnquiryStatus(id, status);
      if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
    }

    if (notes !== undefined) {
      const res = await updateEnquiryNotes(id, notes);
      if (res.error) return NextResponse.json({ error: res.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid update payload' }, { status: 400 });
  }
}

