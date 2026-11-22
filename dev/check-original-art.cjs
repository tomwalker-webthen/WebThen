const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),html=read('index.html');
const data=name=>JSON.parse(html.match(new RegExp('const '+name+'=([^\\r\\n]+);'))[1]);
assert.deepEqual(data('embeddedSiteImages'),{},'No bundled destination brand images');
assert.deepEqual(data('cachedSiteIcons'),{},'No active destination logo mapping');
const skins=data('WEBTHEN_RADIO_SKINS');assert.equal(skins.length,6);
const skinSource=read('contents/radio-skins.js'),skinMode=skinSource===read('dev/artwork/thenamp-skins/winamp.js')?'winamp':skinSource===read('dev/artwork/thenamp-skins/original.js')?'original':null;assert(skinMode,'contents/radio-skins.js must match a saved set in dev/artwork/thenamp-skins');
if(skinMode==='original')assert.deepEqual(skins,JSON.parse(read('contents/original-art/skins.json')));
for(const asset of JSON.parse(read('contents/original-art/manifest.json')).files){const bytes=fs.readFileSync(path.join(root,'contents/original-art',asset.file));assert.equal(bytes.length,asset.bytes);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.sha256,'Asset inventory hash: '+asset.file);}
if(skinMode==='original'){for(const skin of skins){assert(!/winamp|sony|windows|os8|webamp/i.test(skin.name));for(const image of [skin.preview,...Object.values(skin.images)])assert(image.startsWith('data:image/svg+xml;base64,'),'Only original SVG artwork in skin set');const title=Buffer.from(skin.images.titlebar.split(',')[1],'base64').toString();assert(title.includes('THENAMP'));assert(!title.includes('WINAMP'));}}
const wallpaper=read('contents/desktop-themes.css').match(/--xp-wallpaper:url\("([^"]+)"\)/)[1];assert(wallpaper.startsWith('data:image/svg+xml;base64,'));assert.equal(Buffer.from(wallpaper.split(',')[1],'base64').toString(),read('contents/original-art/evening-lake.svg'));
assert(html.includes('<strong>ThenChat</strong>'));assert(!html.includes('<strong>AIM</strong>'));
for(const [kind,value]of Object.entries(data('ambientAimSounds')))assert.equal(value,'data:audio/wav;base64,'+fs.readFileSync(path.join(root,'contents/buddy-sounds',kind+'.wav')).toString('base64'));
assert(html.includes(read('contents/onboarding.css')),'Tour stylesheet mirror');
console.log('PASS: no active cached site logos; ThenAmp skins: '+(skinMode==='winamp'?'classic Winamp set (private testing only; run node dev/use-thenamp-skins.mjs original before a public release)':'six original SVG skins')+'; original wallpaper, ThenChat branding and restored buddy sound set. This is an asset check, not public-launch rights clearance.');
