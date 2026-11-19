(function(){
 const body=document.body,desktop=document.querySelector('#retro-desktop'),bar=document.querySelector('#browser-taskbar');
 const home=document.createElement('button');home.type='button';home.textContent='▣ Desktop';home.id='desktop-home';home.hidden=true;bar.prepend(home);
 const clock=document.createElement('time');clock.className='desktop-clock';clock.hidden=true;bar.append(clock);function tick(){clock.dateTime=new Date().toISOString();clock.textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}tick();const timer=setInterval(tick,30000);window.addEventListener('pagehide',()=>clearInterval(timer));
 function showDirectory(){if(!body.classList.contains('desktop-mode'))return;body.classList.add('desktop-directory-open');WebThenLayers.raise(document.querySelector('#portal-shell'));document.querySelector('#desktop-directory-minimize').focus()}
 function enter(){body.classList.add('desktop-mode');body.classList.remove('desktop-directory-open');desktop.hidden=false;home.hidden=false;clock.hidden=false;syncDesktop();document.querySelector('#desktop-internet-shortcut').focus()}
 function exit(){hideBrowserWindows();body.classList.remove('desktop-mode','desktop-directory-open');desktop.hidden=true;home.hidden=true;clock.hidden=true;syncDesktop();document.querySelector('#desktop-toggle').focus()}
 function showDesktop(){hideBrowserWindows();body.classList.remove('desktop-directory-open');document.querySelector('#desktop-internet-shortcut').focus()}
 document.querySelector('#desktop-toggle').onclick=enter;document.querySelector('#desktop-exit').onclick=exit;document.querySelector('#desktop-return').onclick=exit;document.querySelector('#desktop-directory-minimize').onclick=showDesktop;document.querySelector('#desktop-directory-shortcut').onclick=()=>{hideBrowserWindows();showDirectory()};home.onclick=showDesktop;
 document.querySelector('#desktop-games-shortcut').onclick=()=>{hideBrowserWindows();showDirectory();document.querySelector('#classic-games').scrollIntoView({block:'start'});document.querySelector('#game-room-filter').focus()};
 const aim=document.querySelector('#desktop-aim-shortcut'),toggle=document.querySelector('#ambient-aim-toggle');aim.onclick=()=>toggle.click();const syncAim=()=>aim.setAttribute('aria-pressed',toggle.getAttribute('aria-pressed'));new MutationObserver(syncAim).observe(toggle,{attributes:true,attributeFilter:['aria-pressed']});syncAim();
 globalThis.WebThenDesktop={showDirectory,enter,showDesktop};
})();
