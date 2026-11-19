const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),html=read('index.html');
let scriptCount=0;for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)){new vm.Script(m[1]);scriptCount++}
const sources=JSON.parse(read('dev/inline-sources.json'));for(const file of sources)assert(html.includes(read('contents/'+file)),file+' must match its inline runtime');
const games=JSON.parse(read('contents/game-library.json'));assert(html.includes('const webthenGameLibrary='+JSON.stringify(games)),'Game library must match inline data');
for(const m of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=m[1];if(/^(?:https?:|data:|mailto:|about:|webthen:|javascript:|\/\/)/i.test(url)||url.includes('${'))continue;const relative=url.split(/[?#]/)[0];if(relative)assert(fs.existsSync(path.resolve(root,relative)),'Missing local asset: '+relative)}
for(const file of ['README.md','CHANGELOG.md','VERIFICATION.md'])assert.equal(read(file),read('contents/'+file),file+' linked copy must match');
assert(fs.existsSync(path.join(root,'dev/server.cjs')));assert(!fs.existsSync(path.join(root,'contents/server.cjs')));assert(!fs.existsSync(path.join(root,'.env')));
const forbidden=[/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/\bgh[pousr]_[A-Za-z0-9]{30,}\b/,/\bgithub_pat_[A-Za-z0-9_]{40,}\b/,/\bsk_live_[A-Za-z0-9]{20,}\b/];
for(const file of ['index.html',...sources.map(f=>'contents/'+f)])for(const pattern of forbidden)assert(!pattern.test(read(file)),'Possible credential in '+file+'; review without printing it');
console.log('PASS: '+scriptCount+' inline scripts parse; '+sources.length+' source mirrors; game data, local assets, linked documentation, local-tool placement and credential-pattern checks.');
