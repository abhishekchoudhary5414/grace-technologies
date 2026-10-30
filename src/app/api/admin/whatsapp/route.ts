import { NextResponse, NextRequest } from 'next/server';
import { verifySession, SESSION_COOKIE_NAME } from '@/lib/auth/session';
import { getWhatsAppAnalytics, WhatsAppDateRange } from '@/services/whatsapp.service';

export async function GET(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = verifySession(token);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const range = (searchParams.get('range') as WhatsAppDateRange) || 'all';

  const analytics = await getWhatsAppAnalytics(range);
  return NextResponse.json(analytics);
}

