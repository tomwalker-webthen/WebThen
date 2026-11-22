// Tests functions/api/now-playing.js against fake Shoutcast/Icecast streams.
// Usage: node dev/test-now-playing.mjs
import assert from 'node:assert/strict';
import { parseStreamTitle, readStreamTitle, onRequestGet, STATIONS } from '../functions/api/now-playing.js';

function icyStream(metaint, title, { chunk = 7, audioBytes = metaint } = {}) {
  const meta = new TextEncoder().encode(title == null ? '' : `StreamTitle='${title}';StreamUrl='';`);
  const blocks = Math.ceil(meta.length / 16), padded = new Uint8Array(blocks * 16); padded.set(meta);
  const bytes = new Uint8Array(audioBytes + 1 + padded.length + 50);
  bytes.fill(0xff, 0, audioBytes); bytes[audioBytes] = blocks; bytes.set(padded, audioBytes + 1);
  let offset = 0;
  return new ReadableStream({ pull(controller) { if (offset >= bytes.length) return controller.close(); controller.enqueue(bytes.slice(offset, offset += chunk)); } });
}
const fakeFetch = (metaint, title, opts) => async (url, init) => {
  assert.equal(init.headers['Icy-MetaData'], '1');
  return new Response(icyStream(metaint, title, opts), { headers: metaint ? { 'icy-metaint': String(metaint) } : {} });
};

assert.deepEqual(parseStreamTitle("StreamTitle='Britney Spears - Oops!... I Did It Again';"), { artist: 'Britney Spears', title: 'Oops!... I Did It Again', text: 'Britney Spears - Oops!... I Did It Again' });
assert.deepEqual(parseStreamTitle("StreamTitle='Destiny's Child - Say My Name';"), { artist: "Destiny's Child", title: 'Say My Name', text: "Destiny's Child - Say My Name" });
assert.deepEqual(parseStreamTitle("StreamTitle='Station ID jingle';"), { artist: '', title: 'Station ID jingle', text: 'Station ID jingle' });
assert.equal(parseStreamTitle("StreamTitle='';"), null);
assert.equal(parseStreamTitle("StreamTitle='1.FM - y2k';"), null);
assert.equal(parseStreamTitle('nothing here'), null);

assert.equal((await readStreamTitle('x', fakeFetch(16, 'No Doubt - Hey Baby'))).title, 'Hey Baby');
assert.equal((await readStreamTitle('x', fakeFetch(8192, 'Avril Lavigne - Complicated', { chunk: 1500 }))).artist, 'Avril Lavigne');
assert.equal(await readStreamTitle('x', fakeFetch(0, 'ignored')), null, 'no icy-metaint header');
assert.equal(await readStreamTitle('x', fakeFetch(16, null)), null, 'empty metadata block');

const call = async query => { const r = await onRequestGet({ request: new Request('https://webthen.org/api/now-playing' + query), waitUntil() {} }); return { status: r.status, body: await r.json(), cache: r.headers.get('cache-control') }; };
assert.equal((await call('?station=https://evil.example/')).status, 400, 'only known stations');
assert.equal((await call('')).status, 400);
assert.deepEqual(Object.keys(STATIONS).sort(), ['hits00s', 'hits90s', 'hits90s-alt']);

console.log('PASS: now-playing parses Artist - Title from Icecast/Shoutcast metadata, handles chunked streams, missing or empty metadata, and only serves ThenAmp stations.');
