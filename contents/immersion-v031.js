(function(){
 'use strict';
 const body=document.body,bar=document.querySelector('#browser-taskbar'),macbar=document.querySelector('#aqua-menu-bar'),home=bar.parentNode;
 document.querySelector('#browser-directory').onclick=()=>document.querySelector('#desktop-internet-shortcut').click();
 const policy=WebThenThemePolicy;
 const day=()=>WebThenSessionModel.periodDate(selected);
 const themeLabels={win95:'Windows 95',win98:'Windows 98',win2000:'Windows 2000',me:'Windows ME',xp:'Windows XP',classic:'Classic Mac OS',mac:'Mac OS X · Aqua'};
 for(const id of ['os-theme','desktop-theme-choice','connection-os']){const select=document.getElementById(id);select.replaceChildren();for(const [value,label]of Object.entries(themeLabels))select.add(new Option(label,value));}
 let activeEra=selected;
 function saved(){try{return JSON.parse(localStorage.getItem('webthen-theme-choice-v033'))}catch(e){return null}}
 function clearChoice(){try{for(const key of ['webthen-theme-choice-v033','webthen-os-override-v1','webthen-os'])localStorage.removeItem(key)}catch(e){}}
 function options(){for(const id of ['os-theme','desktop-theme-choice','connection-os'])for(const o of document.getElementById(id).options){o.disabled=!policy.available(o.value,day());o.textContent=themeLabels[o.value]+(o.disabled?' — Not yet released':'');}}
 function paint(theme){
  osSelect.value=theme;body.dataset.os=['win95','me'].includes(theme)?'win98':theme;body.dataset.osVariant=theme;
  for(const id of ['desktop-theme-choice','connection-os'])document.getElementById(id).value=theme;
  const brand=document.querySelector('.start-brand');brand.textContent=theme==='win95'?'Windows 95':theme==='me'?'Windows ME':theme==='win98'?'Windows 98':'WebThen Desktop';
  const caption=document.querySelector('.theme-caption');caption.textContent=theme==='win95'?'Windows 95 · classic desktop and Start menu.':theme==='me'?'Windows ME · classic Windows desktop.':themeLabels[theme];
  document.querySelector('.wallpaper-choice').hidden=!['win95','win98','me'].includes(theme);
 }
 osSelect.onchange=()=>{const theme=osSelect.value;if(!policy.available(theme,day())){WebThenTheme.followEra();return}try{localStorage.setItem('webthen-theme-choice-v033',JSON.stringify({era:selected,theme}))}catch(e){}paint(theme)};
 globalThis.WebThenTheme={followEra(){if(selected!==activeEra){clearChoice();activeEra=selected}options();paint(policy.resolve(day(),selected,saved()))},automatic(){clearChoice();this.followEra()},resetForTravel(next){if(next!==selected)clearChoice()},available:theme=>policy.available(theme,day())};
 WebThenTheme.followEra();
 const previousRender=render;render=function(){previousRender();globalThis.WebThenGames?.render()};
 const auto=document.createElement('button');auto.type='button';auto.textContent='Use era default';auto.onclick=()=>WebThenTheme.automatic();document.querySelector('.appearance-body').append(auto);
 function relocate(){if(['mac','classic'].includes(body.dataset.os)){if(bar.parentNode!==macbar)macbar.append(bar)}else if(bar.parentNode!==home)home.append(bar)}
 new MutationObserver(relocate).observe(body,{attributes:true,attributeFilter:['data-os']});relocate();
 const specifications=[
  ['.session-window','.session-title','button[aria-label="Minimize browser window"]','button[aria-label="Close browser window"]','Browser'],
  ['#portal-shell','.desktop-directory-chrome','#desktop-directory-minimize',null,'Directory'],
  ['#welcome-browser','.welcome-titlebar','#welcome-minimize','#welcome-close','Start page'],
  ['#ambient-aim','.aim-titlebar','#aim-minimize','#aim-close','ThenChat'],
  ['#webthen-music','#music-drag','#music-minimize','#music-close','ThenAmp'],
  ['.game-window','.game-titlebar',null,'#game-close','Game'],
  ['.video-window','.video-titlebar','.video-minimize','.video-close','Video Lounge'],
  ['#desktop-appearance','.appearance-titlebar',null,'header button','Appearance'],
  ['#radio-skin-picker','header',null,'header button','Skin picker'],
  ['#connection-screen','.connection-titlebar','#connection-skip','#connection-skip','Connection'],
  ['.aim-chat-window','.chat-titlebar','button[aria-label^="Minimize conversation"]','button[aria-label^="Close conversation"]','Conversation'],
  ['#webthen-quick-tour','.tour-titlebar',null,'#tour-close','Quick tour']
 ];
 const registered=new WeakSet();
 function install(el,title,min,close,label){if(registered.has(el)||!title)return;registered.add(el);title.classList.add('standard-chrome');
  const controls=document.createElement('span');controls.className='chrome-controls';const restore=document.createElement('button');restore.type='button';restore.textContent=label;restore.hidden=true;bar.append(restore);let previousStyle='';
  restore.onclick=()=>{if(el.dataset.minimized==='true'&&min)min.click();if(el.tagName==='DIALOG'){if(!el.open)el.showModal()}else if(el.id==='portal-shell')WebThenDesktop.showDirectory();else el.hidden=false;restore.hidden=true;WebThenLayers.raise(el)};
  const make=(text,name,fn)=>{const b=document.createElement('button');b.type='button';b.textContent=text;b.setAttribute('aria-label',name+' '+label);b.onclick=fn;controls.append(b);return b};
  if(label!=='Connection')make('_','Minimize',()=>{if(min)min.click();else if(el.tagName==='DIALOG')el.close();else if(el.id==='portal-shell')WebThenDesktop.showDesktop();else el.hidden=true;restore.hidden=false});
  if(label!=='Connection')make('□','Maximize or restore',()=>{if(!el.classList.contains('chrome-maximized')){previousStyle=el.getAttribute('style')||'';el.classList.add('chrome-maximized')}else{el.classList.remove('chrome-maximized');el.setAttribute('style',previousStyle)}WebThenLayers.raise(el)});
  make('×','Close',()=>{restore.hidden=true;if(close)close.click();else if(el.id==='portal-shell')WebThenDesktop.showDesktop();else if(el.tagName==='DIALOG')el.close();else el.hidden=true});
  for(const b of [...title.querySelectorAll('button')]){b.hidden=true;b.style.setProperty('display','none','important')}title.append(controls);
 }
 function scan(){for(const [sel,title,min,close,label]of specifications)for(const el of document.querySelectorAll(sel))install(el,el.querySelector(title),min&&el.querySelector(min),close&&el.querySelector(close),label)}
 let queued=false;new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;scan()})}}).observe(body,{subtree:true,childList:true});scan();
 // Arrange initial surfaces without closing the paused player or changing later user positioning.
 let laidOut=false;
 function layout(){if(laidOut||innerWidth<1100||!document.querySelector('#connection-screen')||document.querySelector('#connection-screen').open)return;const welcome=document.querySelector('#welcome-browser');if(welcome.hidden)return;laidOut=true;
  const top=40,left=110,mainWidth=Math.min(820,innerWidth-left-390),height=innerHeight>=820?460:360;
  Object.assign(welcome.style,{left:left+'px',top:top+'px',width:mainWidth+'px',height:height+'px',right:'auto',bottom:'auto',transform:'none'});
  const aim=document.querySelector('#ambient-aim');Object.assign(aim.style,{left:(innerWidth-300)+'px',top:top+'px',width:'280px',height:'360px',right:'auto',bottom:'auto'});
  const music=document.querySelector('#webthen-music'),musicLeft=left;Object.assign(music.style,{left:musicLeft+'px',top:(top+height+5)+'px',right:'auto',bottom:'auto'});
  const tour=document.querySelector('#webthen-quick-tour');tour.dataset.startLayout='true';
 }
 new MutationObserver(layout).observe(body,{subtree:true,attributes:true,attributeFilter:['hidden','open']});layout();
 // Routine explanatory text stays in the existing details; availability remains visible.
 for(const badge of document.querySelectorAll('.desktop-mark,.desktop-theme-signature'))badge.remove();
})();
