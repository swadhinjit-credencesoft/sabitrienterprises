import { WHATSAPP_NUMBER, CONTACT_EMAIL } from './constants';

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildMailtoLink(params: {
  to?: string;
  subject?: string;
  body?: string;
}): string {
  const to = params.to ?? CONTACT_EMAIL;
  const query = new URLSearchParams();
  if (params.subject) query.set('subject', params.subject);
  if (params.body) query.set('body', params.body);
  const qs = query.toString();
  return `mailto:${to}${qs ? `?${qs}` : ''}`;
}