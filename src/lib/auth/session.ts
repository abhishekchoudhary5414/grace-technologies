import 'server-only';
import crypto from 'crypto';

export interface AdminSessionPayload {
  userId: string;
  username: string;
  fullName: string;
  role: string;
  expiresAt: number; // UNIX timestamp in ms
}

const SESSION_COOKIE_NAME = 'gt_admin_session';
const SESSION_DURATION = 1000 * 60 * 60 * 24; // 24 hours

const getSecret = (): string => {
  return process.env.ADMIN_SESSION_SECRET || 'fallback-gt-admin-session-secret-60225280301b';
};

/**
 * Creates an HMAC-SHA256 signed session string: base64(payload).signature
 */
export function signSession(payload: Omit<AdminSessionPayload, 'expiresAt'>): string {
  const fullPayload: AdminSessionPayload = {
    ...payload,
    expiresAt: Date.now() + SESSION_DURATION,
  };

  const jsonStr = JSON.stringify(fullPayload);
  const base64Payload = Buffer.from(jsonStr).toString('base64url');
  
  const signature = crypto
    .createHmac('sha256', getSecret())
    .update(base64Payload)
    .digest('base64url');

  return `${base64Payload}.${signature}`;
}

/**
 * Verifies and decodes an HMAC-SHA256 signed session token
 */
export function verifySession(token: string | undefined): AdminSessionPayload | null {
  if (!token) return null;

  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [base64Payload, signature] = parts;
  const expectedSig = crypto
    .createHmac('sha256', getSecret())
    .update(base64Payload)
    .digest('base64url');

  // Constant-time signature comparison to prevent timing attacks
  if (
    signature.length !== expectedSig.length ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig))
  ) {
    return null;
  }

  try {
    const jsonStr = Buffer.from(base64Payload, 'base64url').toString('utf8');
    const payload = JSON.parse(jsonStr) as AdminSessionPayload;

    if (!payload.expiresAt || Date.now() > payload.expiresAt) {
      return null; // Expired
    }

    return payload;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME };

