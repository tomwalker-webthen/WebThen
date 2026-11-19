import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
async function walk(dir){const result=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())result.push(...await walk(p));else result.push(path.relative(dist,p).replaceAll('\\','/'));}return result.sort()}
const report=JSON.parse(await readFile(path.join(root,'.cache/dist-report.json'),'utf8'));
assert.deepEqual(await walk(dist),report.files.map(f=>f.path).sort());
assert.deepEqual(await readFile(path.join(dist,'index.html')),await readFile(path.join(root,'index.html')),'App must be byte-for-byte unchanged');
const headers=await readFile(path.join(dist,'_headers'),'utf8');
assert.match(headers,/^\/\*\r?\n/);assert.match(headers,/X-Content-Type-Options: nosniff/);assert.match(headers,/Referrer-Policy: strict-origin-when-cross-origin/);assert.match(headers,/X-Frame-Options: DENY/);assert.doesNotMatch(headers,/Content-Security-Policy/i);
assert.ok((await walk(dist)).includes('404.html'),'Disable Pages SPA fallback');
assert.ok(!(await walk(dist)).some(p=>/\.(?:md|js|cjs|mjs|css)$/i.test(p)||/checks|research|audit|preview|package\.json|AGENTS/i.test(p)));
if(process.argv[2]){
 const origin=process.argv[2];
 for(const p of ['/','/index.html']){const r=await fetch(new URL(p,origin));assert.equal(r.status,200,p);assert.equal(r.headers.get('x-frame-options'),'DENY');await r.arrayBuffer()}
 for(const p of ['/dev/','/VERIFICATION.md','/contents/server.cjs','/contents/README.md','/contents/desktop.js','/contents/ui.css','/contents/destination-audit.json','/package.json']){
  const r=await fetch(new URL(p,origin));assert.equal(r.status,404,p);await r.arrayBuffer();
 }
}
console.log(`PASS: ${report.fileCount} publish files, ${report.totalBytes} bytes; unchanged app, headers, exclusions${process.argv[2]?', HTTP 200/404 checks':''}.`);
