// Switch ThenAmp between the classic Winamp skins (private testing) and the original ThenAmp skins (public release).
// Usage: node dev/use-thenamp-skins.mjs winamp|original
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mode = process.argv[2];
if (!['winamp', 'original'].includes(mode)) { console.error('Usage: node dev/use-thenamp-skins.mjs winamp|original'); process.exit(1); }
const sourceFile = path.join(root, 'contents/radio-skins.js'), htmlFile = path.join(root, 'index.html');
const [current, html, next] = await Promise.all([readFile(sourceFile, 'utf8'), readFile(htmlFile, 'utf8'), readFile(path.join(root, 'dev/artwork/thenamp-skins', mode + '.js'), 'utf8')]);
if (current === next) { console.log(`ThenAmp already uses the ${mode} skins.`); process.exit(0); }
if (!html.includes(current)) throw Error('contents/radio-skins.js does not match its inline copy in index.html; fix the mirror first.');
await writeFile(htmlFile, html.replace(current, () => next));
await writeFile(sourceFile, next);
console.log(`ThenAmp now uses the ${mode} skins. Run node dev/verify.cjs and node dev/check-original-art.cjs.`);
