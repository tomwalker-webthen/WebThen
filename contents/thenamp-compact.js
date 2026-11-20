(function(){
 'use strict';
 const box=document.querySelector('#webthen-music'),main=box.querySelector('.music-main'),face=box.querySelector('.radio-skin-face');
 const details=document.createElement('details');details.className='thenamp-options';details.id='thenamp-options';
 const summary=document.createElement('summary');summary.textContent='Options & station info';
 const content=document.createElement('div');content.className='thenamp-options-content';
 for(const selector of ['.music-follow','#music-status','.music-links','.music-provider']){const node=box.querySelector(selector);if(node)content.append(node)}
 details.append(summary,content);main.append(details);
 try{details.open=localStorage.getItem('webthen-thenamp-options-v1')==='open'}catch(e){}
 details.addEventListener('toggle',()=>{try{localStorage.setItem('webthen-thenamp-options-v1',details.open?'open':'closed')}catch(e){}globalThis.WebThenResize?.fit()});
 face.querySelector('.skin-list').textContent='Info';face.querySelector('.skin-list').setAttribute('aria-controls',details.id);face.querySelector('.skin-list').setAttribute('aria-label','Toggle station options and information');
 face.querySelector('.skin-list').onclick=()=>{details.open=!details.open;summary.focus()};
 const handle=document.createElement('div');handle.className='skin-drag-handle';handle.tabIndex=0;handle.setAttribute('role','button');handle.setAttribute('aria-label','Move ThenAmp window. Drag or use arrow keys.');face.append(handle);
 let drag=null;
 function move(left,top){const r=box.getBoundingClientRect(),floor=/^(mac|classic)$/.test(document.body.dataset.os)?30:4;box.style.left=Math.max(4,Math.min(innerWidth-r.width-4,left))+'px';box.style.top=Math.max(floor,Math.min(innerHeight-Math.min(r.height,200)-48,top))+'px';box.style.right='auto';box.style.bottom='auto'}
 handle.onpointerdown=e=>{if(e.button!==0)return;globalThis.WebThenLayers?.raise(box);const r=box.getBoundingClientRect();drag={x:e.clientX-r.left,y:e.clientY-r.top};handle.setPointerCapture(e.pointerId);e.preventDefault()};
 handle.onpointermove=e=>{if(drag)move(e.clientX-drag.x,e.clientY-drag.y)};handle.onpointerup=handle.onpointercancel=()=>drag=null;
 handle.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();e.stopPropagation();const r=box.getBoundingClientRect(),step=e.shiftKey?30:10;move(r.left+(e.key==='ArrowRight'?step:e.key==='ArrowLeft'?-step:0),r.top+(e.key==='ArrowDown'?step:e.key==='ArrowUp'?-step:0))};
 globalThis.WebThenResize?.fit();
})();
