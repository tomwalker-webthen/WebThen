(function(){
 'use strict';
 const selector='.session-window,#ambient-aim,#webthen-music,#welcome-browser,.aim-chat-window,.game-window,.video-window,body.desktop-mode #portal-shell';let order=[],lastFrame=null;
 function raise(el){if(!el||!el.isConnected)return;order=order.filter(x=>x.isConnected&&x!==el);order.push(el);order.forEach((window,i)=>{window.style.zIndex=String(200+i);window.classList.toggle('front-window',window===el)})}
 function target(element){return element?.closest?.(selector)}
 document.addEventListener('pointerdown',event=>{lastFrame=null;const el=target(event.target);if(el){if(document.activeElement?.tagName==='IFRAME'){if(!el.hasAttribute('tabindex'))el.tabIndex=-1;el.focus({preventScroll:true})}raise(el)}},true);
 document.addEventListener('focusin',event=>{const el=target(event.target);if(el)raise(el)});
 // Cross-origin frames do not bubble pointer events; observe which iframe owns focus instead.
 function frameFocus(){if(document.hidden)return;const frame=document.activeElement;if(frame?.tagName!=='IFRAME'){lastFrame=null;return}if(frame===lastFrame)return;lastFrame=frame;const el=target(frame);if(!el)return;if(el.classList.contains('session-window')){const w=browserWindows.find(w=>w.element===el);if(w)focusBrowserWindow(w,false)}else raise(el)}
 let timer=setInterval(frameFocus,200);window.addEventListener('blur',()=>setTimeout(frameFocus,0));window.addEventListener('pagehide',()=>{clearInterval(timer);timer=null});window.addEventListener('pageshow',()=>{lastFrame=null;if(timer===null)timer=setInterval(frameFocus,200)});
 globalThis.WebThenLayers={raise};
 let activePane=null,restoreFocus=null,lastExit=0,controls=null;
 function message(text){const old=document.querySelector('.fullscreen-feedback');old?.remove();const note=document.createElement('p');note.className='fullscreen-feedback';note.setAttribute('role','status');note.textContent=text;document.body.append(note);setTimeout(()=>note.remove(),6000)}
 function clean(){controls?.remove();controls=null;activePane=null;const button=restoreFocus;restoreFocus=null;lastExit=performance.now();button?.isConnected&&button.focus()}
 async function enter(pane,button){if(!pane)return;if(!pane.requestFullscreen||!document.fullscreenEnabled){message('Fullscreen is not available in this browser.');return}restoreFocus=button;activePane=pane;controls=document.createElement('div');controls.className='immersive-controls';const exit=document.createElement('button');exit.type='button';exit.textContent='Exit fullscreen · Esc';exit.onclick=()=>document.exitFullscreen().catch(()=>{});controls.append(exit);pane.append(controls);try{await pane.requestFullscreen({navigationUI:'hide'})}catch(e){clean();message('The browser did not allow fullscreen. Your window is unchanged.')}}
 document.addEventListener('fullscreenchange',()=>{document.body.classList.toggle('immersive-fullscreen',!!document.fullscreenElement);if(!document.fullscreenElement)lastExit=performance.now();if(activePane&&document.fullscreenElement!==activePane)clean()});
 document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;if(document.fullscreenElement){event.preventDefault();event.stopImmediatePropagation();document.exitFullscreen().catch(()=>{})}else if(performance.now()-lastExit<500){event.stopImmediatePropagation()}},true);
 globalThis.WebThenFullscreen={enter};
})();
