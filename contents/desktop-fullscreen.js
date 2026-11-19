(function(){
 'use strict';
 const root=document.documentElement,buttons=[];
 function notify(text){document.querySelector('#desktop-fullscreen-feedback')?.remove();const note=document.createElement('p');note.id='desktop-fullscreen-feedback';note.className='fullscreen-feedback';note.setAttribute('role','status');note.textContent=text;document.body.append(note);setTimeout(()=>note.remove(),6000)}
 function sync(){const active=document.fullscreenElement===root;for(const b of buttons){b.textContent=active?'⤡ Exit fullscreen':'⛶ Fullscreen WebThen';b.setAttribute('aria-pressed',String(active));b.title=active?'Show your browser again · Esc':'Hide browser controls and desktop; keep all of WebThen visible'}}
 async function toggle(){try{if(document.fullscreenElement===root){await document.exitFullscreen();return}if(!root.requestFullscreen||!document.fullscreenEnabled){notify('Fullscreen is not available in this browser.');return}if(document.fullscreenElement){notify('Exit the page fullscreen view first, then choose Fullscreen WebThen.');return}await root.requestFullscreen({navigationUI:'hide'})}catch(e){console.warn('WebThen fullscreen request:',e.name,e.message);notify('Your browser did not allow fullscreen. WebThen is still available in this window.')}finally{sync()}}
 function add(parent,id){const b=document.createElement('button');b.type='button';b.id=id;b.className='desktop-fullscreen-toggle';b.onclick=toggle;parent.append(b);buttons.push(b)}
 add(document.querySelector('#browser-taskbar'),'desktop-fullscreen-toggle');
 add(document.querySelector('.desktop-mark'),'desktop-fullscreen-shortcut');
 add(document.querySelector('.connection-actions'),'connection-fullscreen-toggle');
 document.addEventListener('fullscreenchange',sync);sync();
})();
