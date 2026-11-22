// Cloudflare Pages Function: GET /api/now-playing?station=<id>
// Reads the song title that Shoutcast/Icecast streams embed ("StreamTitle='Artist - Title'") and returns it as JSON.
// Only ThenAmp's own stations are allowed, so this cannot be used as an open proxy.
export const STATIONS = {
  hits90s: 'https://listen.181fm.com/181-star90s_128k.mp3',
  hits00s: 'https://strm112.1.fm/hits2000_mobile_mp3?aw_0_req.gdpr=true',
  'hits90s-alt': 'https://strm112.1.fm/90s_mobile_mp3?aw_0_req.gdpr=true'
};
const MAX_BYTES = 256 * 1024;

export function parseStreamTitle(metadata) {
  const match = /StreamTitle='((?:[^']|'(?!;))*)';/.exec(metadata);
  const text = match ? match[1].replace(/\s+/g, ' ').trim() : '';
  if (!text || /^(?:-|unknown|advert|commercial|1\.fm|181\.fm)/i.test(text)) return null;
  const split = text.indexOf(' - ');
  return split > 0 ? { artist: text.slice(0, split).trim(), title: text.slice(split + 3).trim(), text } : { artist: '', title: text, text };
}

export async function readStreamTitle(url, fetcher = fetch) {
  const response = await fetcher(url, { headers: { 'Icy-MetaData': '1', 'User-Agent': 'WebThen/1.0 (+https://webthen.org)' }, signal: AbortSignal.timeout(7000) });
  const interval = Number(response.headers.get('icy-metaint'));
  if (!response.ok || !response.body || !interval) { response.body?.cancel(); return null; }
  const reader = response.body.getReader();
  let buffer = new Uint8Array(0);
  try {
    while (buffer.length < MAX_BYTES) {
      if (buffer.length > interval) {
        const length = buffer[interval] * 16, start = interval + 1;
        if (length === 0) return null;
        if (buffer.length >= start + length) return parseStreamTitle(new TextDecoder('utf-8').decode(buffer.subarray(start, start + length)));
      }
      const { value, done } = await reader.read();
      if (done) return null;
      const next = new Uint8Array(buffer.length + value.length);
      next.set(buffer); next.set(value, buffer.length); buffer = next;
    }
    return null;
  } finally { reader.cancel().catch(() => {}); }
}

const json = (body, status = 200, maxAge = 15) => new Response(JSON.stringify(body), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': `public, max-age=${maxAge}`, 'X-Content-Type-Options': 'nosniff' }
});

export async function onRequestGet({ request, waitUntil }) {
  const id = new URL(request.url).searchParams.get('station') || '';
  if (!Object.hasOwn(STATIONS, id)) return json({ error: 'Unknown station' }, 400, 300);
  const cache = typeof caches === 'object' ? caches.default : null;
  const key = new Request(new URL('/api/now-playing?station=' + encodeURIComponent(id), request.url).toString());
  const cached = cache && await cache.match(key);
  if (cached) return cached;
  let song = null;
  try { song = await readStreamTitle(STATIONS[id]); } catch { song = null; }
  const response = json({ station: id, ...(song || { artist: '', title: '', text: '' }), available: !!song, checkedAt: new Date().toISOString() });
  if (cache) waitUntil(cache.put(key, response.clone()));
  return response;
}
