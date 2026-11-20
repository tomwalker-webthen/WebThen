function webthenDragPosition(left,top,width,height,viewportWidth,viewportHeight,mac){
 const minLeft=6,minTop=mac?30:6;
 return {left:Math.max(minLeft,Math.min(Math.max(minLeft,viewportWidth-width-6),left)),top:Math.max(minTop,Math.min(Math.max(minTop,viewportHeight-height-48),top))};
}
(function(){
 'use strict';
 function install(windowElement,titlebar,name,enabled){
  let drag=null;titlebar.classList.add('desktop-move-handle');titlebar.tabIndex=0;titlebar.title='Drag to move. Alt + arrow keys move when this title bar is focused.';titlebar.setAttribute('aria-label','Move '+name+' window');
  function move(left,top,width,height){const p=webthenDragPosition(left,top,width,height,innerWidth,innerHeight,/^(mac|classic)$/.test(document.body.dataset.os));Object.assign(windowElement.style,{position:'fixed',left:p.left+'px',top:p.top+'px',right:'auto',bottom:'auto',width:width+'px',height:height+'px',transform:'none'});}
  titlebar.addEventListener('pointerdown',event=>{if(!enabled()||event.button!==0||event.target.closest('button,a,input,select,summary'))return;const r=windowElement.getBoundingClientRect();drag={x:event.clientX,y:event.clientY,left:r.left,top:r.top,width:r.width,height:r.height};WebThenLayers.raise(windowElement);move(r.left,r.top,r.width,r.height);titlebar.setPointerCapture(event.pointerId);event.preventDefault();});
  titlebar.addEventListener('pointermove',event=>{if(drag)move(drag.left+event.clientX-drag.x,drag.top+event.clientY-drag.y,drag.width,drag.height)});
  const stop=()=>drag=null;titlebar.addEventListener('pointerup',stop);titlebar.addEventListener('pointercancel',stop);titlebar.addEventListener('lostpointercapture',stop);
  titlebar.addEventListener('keydown',event=>{if(!enabled()||event.target!==titlebar||!event.altKey||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;event.preventDefault();const r=windowElement.getBoundingClientRect(),step=event.shiftKey?40:10;WebThenLayers.raise(windowElement);move(r.left+(event.key==='ArrowRight'?step:event.key==='ArrowLeft'?-step:0),r.top+(event.key==='ArrowDown'?step:event.key==='ArrowUp'?-step:0),r.width,r.height)});
 }
 install(document.querySelector('#portal-shell'),document.querySelector('.desktop-directory-chrome'),'WebThen Directory',()=>document.body.classList.contains('desktop-mode'));
 install(document.querySelector('#welcome-browser'),document.querySelector('.welcome-titlebar'),'Start page',()=>true);
})();
