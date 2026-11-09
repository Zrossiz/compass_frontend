export const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:10000';
export const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL ?? 'http://localhost:9000';

export const professionCatalogBatchSize = 9;
export const specialityCatalogBatchSize = 9;

export function trackImageUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const origin = path.startsWith('/api/') ? baseUrl : mediaUrl;
  return `${origin.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
