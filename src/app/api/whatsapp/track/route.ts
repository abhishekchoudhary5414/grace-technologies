import { NextResponse, NextRequest } from 'next/server';
import { z } from 'zod';
import { recordWhatsAppClick } from '@/services/whatsapp.service';

const clickSchema = z.object({
  page_url: z.string().optional(),
  page_path: z.string().optional(),
  referrer: z.string().optional(),
  browser: z.string().optional(),
  device_type: z.string().optional(),
  operating_system: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const result = clickSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const userAgent = request.headers.get('user-agent') || '';
    const referrer = request.headers.get('referer') || result.data.referrer || '';

    // Record click event non-blockingly
    await recordWhatsAppClick({
      page_url: result.data.page_url,
      page_path: result.data.page_path,
      referrer,
      browser: result.data.browser || parseBrowser(userAgent),
      device_type: result.data.device_type || parseDevice(userAgent),
      operating_system: result.data.operating_system || parseOS(userAgent),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('WhatsApp track error:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

function parseBrowser(ua: string): string {
  if (/chrome|crios/i.test(ua) && !/edge|opr/i.test(ua)) return 'Chrome';
  if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) return 'Safari';
  if (/firefox|fxios/i.test(ua)) return 'Firefox';
  if (/edg/i.test(ua)) return 'Edge';
  if (/opr\//i.test(ua)) return 'Opera';
  return 'Other';
}

function parseDevice(ua: string): string {
  if (/ipad|tablet/i.test(ua)) return 'Tablet';
  if (/mobile|android|iphone/i.test(ua)) return 'Mobile';
  return 'Desktop';
}

function parseOS(ua: string): string {
  if (/windows/i.test(ua)) return 'Windows';
  if (/macintosh|mac os x/i.test(ua)) return 'macOS';
  if (/android/i.test(ua)) return 'Android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'iOS';
  if (/linux/i.test(ua)) return 'Linux';
  return 'Unknown';
}

