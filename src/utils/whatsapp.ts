// Non-blocking public WhatsApp click tracker
export function trackAndOpenWhatsApp(href: string, serviceTitle?: string) {
  if (typeof window === 'undefined') return;

  // 1. Collect client telemetry
  const ua = window.navigator.userAgent;
  let device_type = 'Desktop';
  if (/ipad|tablet/i.test(ua)) device_type = 'Tablet';
  else if (/mobile|android|iphone/i.test(ua)) device_type = 'Mobile';

  let browser = 'Other';
  if (/chrome|crios/i.test(ua) && !/edge|opr/i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) browser = 'Safari';
  else if (/firefox|fxios/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';
  else if (/opr\//i.test(ua)) browser = 'Opera';

  let operating_system = 'Unknown';
  if (/windows/i.test(ua)) operating_system = 'Windows';
  else if (/macintosh|mac os x/i.test(ua)) operating_system = 'macOS';
  else if (/android/i.test(ua)) operating_system = 'Android';
  else if (/iphone|ipad|ipod/i.test(ua)) operating_system = 'iOS';
  else if (/linux/i.test(ua)) operating_system = 'Linux';

  const payload = JSON.stringify({
    page_url: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || '',
    browser,
    device_type,
    operating_system,
  });

  // 2. Deliver event via sendBeacon (non-blocking) or fetch fallback
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon('/api/whatsapp/track', blob);
    } else {
      fetch('/api/whatsapp/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Analytics failure must NEVER block opening WhatsApp
  }

  // 3. Open WhatsApp link smoothly
  window.open(href, '_blank', 'noopener,noreferrer');
}

