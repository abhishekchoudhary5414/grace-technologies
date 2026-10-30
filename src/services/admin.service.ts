import 'server-only';
import bcrypt from 'bcryptjs';
import { createServerSupabaseClient } from '@/lib/supabase/server';

export interface AdminUser {
  id: string;
  username: string;
  password_hash: string;
  full_name: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login_at: string | null;
  created_at: string;
  updated_at: string;
}

export async function getAdminByUsername(username: string): Promise<AdminUser | null> {
  const supabase = createServerSupabaseClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('username', username.trim().toLowerCase())
    .single();

  if (error || !data) {
    return null;
  }

  return data as AdminUser;
}

export async function verifyPassword(plainPassword: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(plainPassword, hash);
  } catch {
    return false;
  }
}

export async function updateLastLogin(userId: string): Promise<void> {
  const supabase = createServerSupabaseClient();
  if (!supabase) return;

  await supabase
    .from('admin_users')
    .update({ last_login_at: new Date().toISOString() })
    .eq('id', userId);
}

