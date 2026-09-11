export function parsePrice(value: string): number {
  return Number(value.replace(/[^\d]/g, '')) || 0;
}

export function formatINR(n: number): string {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function formatPhone(value: string): string {
  return value.replace(/\s/g, '');
}