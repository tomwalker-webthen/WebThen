import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const folder=path.join(root,'contents/original-art');
fs.mkdirSync(folder,{recursive:true});
const svg=(width,height,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${body}</svg>`;
const uri=text=>'data:image/svg+xml;base64,'+Buffer.from(text).toString('base64');
const save=(name,text)=>{fs.writeFileSync(path.join(folder,name),text);return uri(text)};

// Original WebThen artwork. No extracted sprites, photographs or brand marks.
export const drawings={
 internet:'<rect x="2" y="4" width="28" height="23" rx="2" fill="#b7d7df" stroke="#243f58"/><path d="M3 10h26" stroke="#243f58"/><path d="M5 7h2m2 0h2" stroke="#fff" stroke-width="2"/><circle cx="16" cy="18" r="6" fill="#298ba6" stroke="#173f59"/><path d="M10 18h12m-6-6c-4 4-4 8 0 12m0-12c4 4 4 8 0 12" fill="none" stroke="#d6ffff"/><path d="M24 21l6 7-4-1-2 3z" fill="#fff3c4" stroke="#243f58"/>',
 aim:'<path d="M3 3h13v9H8l-4 4v-4H3z" fill="#fff4c2" stroke="#34545b"/><path d="M6 6h7M6 9h5" stroke="#54989a"/><circle cx="19" cy="13" r="4" fill="#55b6aa" stroke="#24565c"/><path d="M12 30v-7q0-6 7-6t7 6v7z" fill="#398d94" stroke="#24565c"/><path d="M24 21l4-4V9m-2 1 2 2 2-2" fill="none" stroke="#24565c" stroke-width="2.5" stroke-linecap="round"/><path d="M16 21v5m6-5v5" stroke="#b9eee1"/>',
 music:'<rect x="2" y="5" width="28" height="23" rx="2" fill="#354758" stroke="#152b3b"/><rect x="5" y="8" width="22" height="10" rx="1" fill="#b7dbd2"/><circle cx="10" cy="13" r="3" fill="#354758"/><circle cx="22" cy="13" r="3" fill="#354758"/><path d="M10 13h12M9 25l2-5h10l2 5z" fill="none" stroke="#e3bc72" stroke-width="2"/><path d="M5 24h2m18 0h2" stroke="#eee"/>',
 flag:'<path d="M3 16l8-10 8 10-8 10z" fill="#53aaa6" stroke="#28565e"/><path d="M13 16l8-10 8 10-8 10z" fill="#f2cf79" stroke="#8a693a"/><path d="M12 16h8" stroke="#fff" stroke-width="2"/>',
 aqua:'<path d="M3 7h11l3 4h12v17H3z" fill="#c6e3e6" stroke="#28566b"/><path d="M3 14h26l-3 14H3z" fill="#59a2b4" stroke="#28566b"/><path d="M9 18h12v7H9z" fill="#f8f0cd" stroke="#28566b"/><path d="M12 21h6" stroke="#548ea0"/>'
};
for(const [name,body] of Object.entries(drawings))save(name+'.svg',svg(32,32,body));

const wallpaper=svg(1600,1000,`<defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#24496e"/><stop offset=".65" stop-color="#9ac6cc"/><stop offset="1" stop-color="#ecd9af"/></linearGradient><linearGradient id="lake" x2="0" y2="1"><stop stop-color="#79b3b9"/><stop offset="1" stop-color="#233e59"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h1600v1000H0z"/><circle cx="1160" cy="320" r="76" fill="#f6dfab" opacity=".85"/><path d="M0 535L190 405l170 106 230-166 225 178 210-115 210 148 180-102 185 93v453H0z" fill="#476e7e"/><path d="M0 603L210 485l203 122 190-105 225 109 186-104 260 113 170-82 156 89v373H0z" fill="#244f60"/><path d="M0 650q390-34 800 8t800-9v351H0z" fill="url(#lake)"/><path d="M1000 707h300m-360 35h380m-440 35h470m-400 37h320" stroke="#bed6ce" stroke-width="3" opacity=".36"/><path d="M0 845q240-80 474 24t460 68l666 63H0z" fill="#1b3c48"/><path d="M0 896q260-37 435 40t410 64H0z" fill="#366b68"/><g fill="#14333d"><path d="M60 872l45-186 45 186h-34v70H93v-70zM167 893l38-149 38 149h-29v65h-18v-65zM1450 870l40-163 40 163h-30v83h-20v-83z"/></g>`);
const wallpaperUri=save('evening-lake.svg',wallpaper);

const definitions=[
 ['graphite','Graphite','#303c46','#d4e2df','#112b2e','#9fe4b0','#75848a'],
 ['midnight','Midnight','#242c50','#dce4ff','#0d1630','#a6d7ff','#717ba0'],
 ['copper','Copper','#654a3e','#fff1d6','#241b18','#f6d294','#b99473'],
 ['pocket','Pocket','#a9b583','#202d28','#233d30','#d8edb3','#536c4b'],
 ['sky','Skyline','#326b8a','#eef8ff','#122c43','#b3e8ff','#90c6d7'],
 ['glacier','Glacier','#9ebabe','#173f4b','#143c43','#c9f1e3','#527a86']
];
const skins=definitions.map(([id,name,panel,text,lcd,ink,edge])=>{
 const backdrop=`<defs><linearGradient id="metal" x2="0" y2="1"><stop stop-color="${edge}"/><stop offset=".35" stop-color="${panel}"/><stop offset="1" stop-color="${panel}"/></linearGradient></defs><rect width="275" height="116" fill="${panel}"/><rect x="1" y="1" width="273" height="114" fill="url(#metal)" stroke="${edge}"/><path d="M8 17h259M8 77h259" stroke="${edge}"/><rect x="17" y="20" width="86" height="44" fill="${lcd}" stroke="${edge}"/><rect x="108" y="21" width="158" height="33" fill="${lcd}" stroke="${edge}"/><path d="M20 70h5m4 0h5m4 0h5m4 0h5m4 0h5m4 0h5m4 0h5" stroke="${ink}" stroke-width="2" opacity=".5"/><path d="M8 111h259" stroke="${edge}"/>`;
 const main=save(id+'-main.svg',svg(275,116,backdrop));
 const title=svg(302,14,`<rect width="302" height="14" fill="${panel}"/><path d="M33 3h13v8H33z" fill="none" stroke="${text}"/><path d="M35 5h9m-9 3h9" stroke="${ink}"/><text x="53" y="10" fill="${text}" font-family="Tahoma,sans-serif" font-weight="bold" font-size="9" letter-spacing="1.3">THENAMP</text><path d="M270 8h5m4-5v6h6V3zm10 0 5 6m-5 0 5-6" fill="none" stroke="${text}"/>`);
 const glyphs=['M8 5v8m8-8-7 4 7 4z','M8 5v8l8-4z','M8 5v8m6-8v8','M8 5h8v8H8z','M15 5v8m-8-8 7 4-7 4z'];
 const buttons=svg(115,36,[0,18].map((y,row)=>glyphs.map((g,i)=>`<g transform="translate(${i*23} ${y})"><rect x="1" y="1" width="21" height="16" rx="1" fill="${row?lcd:edge}" stroke="${text}" stroke-opacity=".6"/><path d="${g}" fill="${text}" stroke="${text}" stroke-width="1.5"/></g>`).join('')).join(''));
 const volume=svg(68,420,Array.from({length:28},(_,i)=>`<g transform="translate(0 ${i*15})"><path d="M2 7h64" stroke="${lcd}" stroke-width="5"/><path d="M2 7h${Math.round(i/27*64)}" stroke="${ink}" stroke-width="3"/></g>`).join(''));
 const preview=svg(275,116,backdrop+`<text x="14" y="12" fill="${text}" font-family="Tahoma,sans-serif" font-size="9" letter-spacing="2">THENAMP</text><text x="29" y="43" fill="${ink}" font-family="monospace" font-size="11">PAUSED</text><text x="114" y="35" fill="${ink}" font-family="monospace" font-size="8">${name.toUpperCase()} / HITS RADIO</text><text x="114" y="49" fill="${ink}" font-family="monospace" font-size="7">PRESS PLAY TO TUNE IN</text><path d="M26 91v12l10-6zM47 91v12m6-12v12M69 91h12v12H69z" fill="${text}" stroke="${text}"/>`);
 return {id,name,description:'Original WebThen artwork · '+name+' finish.',palette:{panel,text,lcd,ink,edge},preview:save(id+'-preview.svg',preview),images:{main,titlebar:save(id+'-title.svg',title),cbuttons:save(id+'-buttons.svg',buttons),volume:save(id+'-volume.svg',volume)}};
});
fs.writeFileSync(path.join(folder,'skins.json'),JSON.stringify(skins,null,2)+'\n');

// Newly composed short door-like cues and a message chime; no sampled AIM audio.
function wav(kind){
 const rate=22050,seconds=kind==='message'?.45:.65,count=Math.floor(rate*seconds),pcm=Buffer.alloc(count*2);
 for(let i=0;i<count;i++){const t=i/rate,p=t/seconds,envelope=Math.sin(Math.PI*p)**2;let sample;
  if(kind==='message')sample=(Math.sin(2*Math.PI*660*t)+.55*Math.sin(2*Math.PI*990*t))*envelope*.18;
  else {const start=kind==='signin'?360:620,sweep=kind==='signin'?260:-300;sample=Math.sin(2*Math.PI*(start*t+sweep*t*t/(2*seconds)))*envelope*.13;sample+=Math.sin(2*Math.PI*110*t)*Math.exp(-(((t-.54)/.018)**2))*.27;}
  pcm.writeInt16LE(Math.max(-32767,Math.min(32767,Math.round(sample*32767))),i*2);
 }
 const header=Buffer.alloc(44);header.write('RIFF');header.writeUInt32LE(36+pcm.length,4);header.write('WAVEfmt ',8);header.writeUInt32LE(16,16);header.writeUInt16LE(1,20);header.writeUInt16LE(1,22);header.writeUInt32LE(rate,24);header.writeUInt32LE(rate*2,28);header.writeUInt16LE(2,32);header.writeUInt16LE(16,34);header.write('data',36);header.writeUInt32LE(pcm.length,40);return Buffer.concat([header,pcm]);
}
const sounds=Object.fromEntries(['signin','signout','message'].map(kind=>{const bytes=wav(kind);fs.writeFileSync(path.join(folder,kind+'.wav'),bytes);return [kind,'data:audio/wav;base64,'+bytes.toString('base64')]}));

let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
function constant(name,value){const pattern=new RegExp('const '+name+'=[^\\r\\n]+');if(!pattern.test(html))throw Error('Missing '+name);html=html.replace(pattern,'const '+name+'='+JSON.stringify(value)+';')}
constant('WEBTHEN_RADIO_SKINS',skins);constant('ambientAimSounds',sounds);
const skinSource=path.join(root,'contents/radio-skins.js');
fs.writeFileSync(skinSource,fs.readFileSync(skinSource,'utf8').replace(/const WEBTHEN_RADIO_SKINS=[^\r\n]+/,'const WEBTHEN_RADIO_SKINS='+JSON.stringify(skins)+';'));
constant('embeddedSiteImages',{});constant('cachedSiteIcons',{});
for(const file of ['desktop-themes.js','session-v032.js']){
 const sourceFile=path.join(root,'contents',file),before=fs.readFileSync(sourceFile,'utf8');let after=before;
 const keys=file==='desktop-themes.js'?Object.keys(drawings):['aim','music'];
 for(const key of keys){const body=file==='desktop-themes.js'?drawings[key]:'<g transform="translate(0 -1) scale(.8)">'+drawings[key]+'</g>';after=after.replace(new RegExp('  '+key+":'[^\\r\\n]+"),'  '+key+":'"+body+"'"+(key==='aqua'?'};':','));}
 if(!html.includes(before))throw Error('Source mirror mismatch: '+file);html=html.replace(before,after);fs.writeFileSync(sourceFile,after);
}
html=html.replace(/<svg class="aim-runner"[\s\S]*?<\/svg>/,'<svg class="aim-runner" viewBox="0 0 32 32" aria-hidden="true">'+drawings.aim+'</svg>');
html=html.replace('// Source-site icons and selected classic logos are embedded from the local cache.','// Original category illustrations identify destinations; brand-image caches are retired.');
const cssFile=path.join(root,'contents/desktop-themes.css'),oldCss=fs.readFileSync(cssFile,'utf8');
const newCss=oldCss.replace(/--xp-wallpaper:url\("[^"]+"\)/,'--xp-wallpaper:url("'+wallpaperUri+'")');
if(!html.includes(oldCss))throw Error('Desktop stylesheet must match inline before generating');
html=html.replace(oldCss,newCss);fs.writeFileSync(cssFile,newCss);
fs.writeFileSync(path.join(root,'index.html'),html);
const manifest={createdFor:'WebThen',createdAt:'2026-11-19',generator:'dev/generate-original-art.mjs',note:'Project-authored SVG and generated PCM WAV assets; no third-party sprites or photographs. This inventory is not overall product or hosting rights clearance.',files:fs.readdirSync(folder).filter(name=>name!=='manifest.json').sort().map(name=>{const bytes=fs.readFileSync(path.join(folder,name));return {file:name,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')}})};
fs.writeFileSync(path.join(folder,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Generated original shell icons, Evening Lake, six ThenAmp skins and three ThenChat cues. Updated inline assets.');

