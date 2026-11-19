import {readFile, writeFile, readdir, stat, mkdir, copyFile, rm, lstat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
// Only this fixed output directory may be cleaned. Refuse symlinks/junctions.
if (path.dirname(dist) !== root || path.basename(dist) !== 'dist') throw Error('Unsafe output path');
try { if ((await lstat(dist)).isSymbolicLink()) throw Error('dist must not be a link'); }
catch (e) { if (e.code !== 'ENOENT') throw e; }
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const excluded = p => /(?:^|\/)(?:dev|AGENTS\.md|CHANGELOG\.md|VERIFICATION\.md|README[^/]*\.md|package\.json|server\.cjs|Start WebThen\.cmd)(?:\/|$)/i.test(p)
  || /\.(?:js|css|md|html)$/i.test(p)
  || /(?:audit|research|checks|evidence|preview|leads|manifest|historical-additions)/i.test(p)
  || /-v0\d+.*\.(?:png|jpe?g)$/i.test(p);
const selected = new Set(['index.html']);
const omitted = new Set();
async function add(ref) {
  const p = decodeURIComponent(ref.split(/[?#]/)[0]).replace(/^\//, '');
  if (!p || p === 'index.html') return;
  if (!p.startsWith('contents/') || p.includes('..') || p.includes('\\')) throw Error('Unexpected runtime path: '+p);
  if (excluded(p)) { omitted.add(p); return; }
  const full = path.resolve(root, p);
  if (!full.startsWith(root + path.sep)) throw Error('Unsafe runtime path');
  const info = await lstat(full);
  if (info.isSymbolicLink()) throw Error('Runtime assets must not be links: '+p);
  if (info.isDirectory()) {
    for (const child of await readdir(full)) await add(p.replace(/\/$/,'')+'/'+child);
  } else selected.add(p);
}
// Covers HTML attributes, CSS and JavaScript literals, including escaped slashes.
// Directory prefixes (e.g. `contents/icons/` + key) expand conservatively.
const decoded = html.replace(/\\\//g, '/').replace(/\\u002[fF]/g, '/');
for (const m of decoded.matchAll(/contents\/[A-Za-z0-9_./% -]*/g)) await add(m[0].trim());
const observed = JSON.parse(await readFile(path.join(root,'dev/runtime-requests.json'),'utf8'));
for (const p of observed.paths) await add(p);
await rm(dist, {recursive:true, force:true});
await mkdir(dist, {recursive:true});
for (const p of [...selected].sort()) {
  await mkdir(path.dirname(path.join(dist,p)), {recursive:true});
  await copyFile(path.join(root,p), path.join(dist,p));
}
await copyFile(path.join(root,'dev/cloudflare/_headers'), path.join(dist,'_headers'));
// Without this, Pages' SPA fallback serves index.html for excluded source paths.
await copyFile(path.join(root,'dev/cloudflare/404.html'), path.join(dist,'404.html'));
const files = [...selected, '_headers','404.html'].sort();
const sizes = await Promise.all(files.map(async p=>({path:p,bytes:(await stat(path.join(dist,p))).size})));
const report = {files:sizes,fileCount:sizes.length,totalBytes:sizes.reduce((n,f)=>n+f.bytes,0),excludedReferences:[...omitted].sort(),discovery:observed};
await mkdir(path.join(root,'.cache'),{recursive:true});
await writeFile(path.join(root,'.cache/dist-report.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({fileCount:report.fileCount,totalBytes:report.totalBytes,files,excludedReferences:report.excludedReferences},null,2));
