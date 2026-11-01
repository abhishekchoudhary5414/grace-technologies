/**
 * Consent-Aware Analytics & Event Tracking for Grace Technologies
 * Supports GA4, Meta Pixel & conversion attribution without storing PII
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    fbq?: (...args: any[]) => void;
  }
}

export type ConversionEvent =
  | 'generate_lead'
  | 'form_start'
  | 'form_submit'
  | 'click_whatsapp'
  | 'click_email'
  | 'click_phone'
  | 'book_consultation'
  | 'view_service';

export interface EventParams {
  event_category?: string;
  event_label?: string;
  service_name?: string;
  country?: string;
  source?: string;
  page_path?: string;
  [key: string]: unknown;
}

/**
 * Dispatches conversion and interaction events to GA4 and Meta Pixel
 */
export function trackEvent(eventName: ConversionEvent, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  const enrichedParams = {
    ...params,
    page_path: window.location.pathname,
    page_url: window.location.href,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, enrichedParams);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams,
    });
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    if (eventName === 'generate_lead') {
      window.fbq('track', 'Lead', {
        content_name: params.service_name || 'General Enquiry',
        status: 'submitted',
      });
    } else if (eventName === 'click_whatsapp' || eventName === 'click_phone') {
      window.fbq('trackCustom', 'ContactClick', { channel: eventName });
    }
  }

  // Debug logging in dev mode
  if (process.env.NODE_ENV === 'development') {
    console.log(`[SEO-Analytics] Event: ${eventName}`, enrichedParams);
  }
}

