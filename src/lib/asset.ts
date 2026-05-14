const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '/lakon-site';

export function asset(p: string): string {
  if (!p.startsWith('/')) return p;
  return `${BASE_PATH}${p}`;
}
