'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'focussrm-cookie-consent';
export const CONSENT_EVENT = 'focussrm-cookie-consent-changed';

export interface CookieConsent {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
}

type ConsentChoice = Pick<CookieConsent, 'preferences' | 'analytics' | 'marketing'>;

function readStoredConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    if (typeof parsed.decidedAt !== 'string') return null;
    return {
      necessary: true,
      preferences: !!parsed.preferences,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      decidedAt: parsed.decidedAt,
    };
  } catch {
    return null;
  }
}

function writeStoredConsent(choice: ConsentChoice): CookieConsent {
  const consent: CookieConsent = { necessary: true, ...choice, decidedAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(CONSENT_EVENT));
  return consent;
}

/** localStorage-backed cookie consent choice — no context/state library, just a
 * mount-time read + setter. Ported from krasotki-site-next's useCookieConsent. */
export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null | undefined>(undefined);

  useEffect(() => {
    setConsent(readStoredConsent());
    const onChange = () => setConsent(readStoredConsent());
    window.addEventListener(CONSENT_EVENT, onChange);
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onChange);
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const acceptAll = useCallback(() => {
    setConsent(writeStoredConsent({ preferences: true, analytics: true, marketing: true }));
  }, []);

  const savePreferences = useCallback((choice: ConsentChoice) => {
    setConsent(writeStoredConsent(choice));
  }, []);

  return {
    consent,
    acceptAll,
    savePreferences,
  };
}
