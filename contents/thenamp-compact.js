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
 // Station list: a Winamp-style playlist of station names that drives the (hidden) station dropdown.
 const select=box.querySelector('#music-station'),row=box.querySelector('.music-station-row'),track=box.querySelector('#music-track');
 const list=document.createElement('ul');list.className='thenamp-playlist';list.id='thenamp-playlist';list.setAttribute('role','listbox');list.setAttribute('aria-label','Stations');list.tabIndex=0;row.after(list);
 const rowLabel=row.querySelector('label[for="music-station"]');if(rowLabel){rowLabel.textContent='Stations';rowLabel.htmlFor='thenamp-playlist'}
 select.hidden=true;select.tabIndex=-1;select.setAttribute('aria-hidden','true');
 let active=0;
 function mark(){[...list.children].forEach((li,i)=>li.classList.toggle('focus',i===active));list.setAttribute('aria-activedescendant','thenamp-station-'+active)}
 function paint(){const options=[...select.options];list.replaceChildren(...options.map((o,i)=>{const li=document.createElement('li'),current=o.value===select.value;li.id='thenamp-station-'+i;li.setAttribute('role','option');li.dataset.value=o.value;li.textContent=o.textContent;li.title=o.textContent;li.setAttribute('aria-selected',String(current));li.classList.toggle('current',current);if(current)active=i;li.onclick=()=>choose(o.value);li.ondblclick=()=>{choose(o.value);box.querySelector('#music-play').click()};return li}));mark()}
 function choose(value){active=[...select.options].findIndex(o=>o.value===value);if(select.value!==value){select.value=value;select.dispatchEvent(new Event('change'))}paint()}
 list.onkeydown=e=>{const n=list.children.length;if(!n)return;if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();active=(active+(e.key==='ArrowDown'?1:-1)+n)%n;mark();list.children[active].scrollIntoView({block:'nearest'})}else if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(list.children[active].dataset.value)}};
 const repaint=new MutationObserver(paint);repaint.observe(select,{childList:true});repaint.observe(track,{childList:true,characterData:true,subtree:true});
 paint();
 globalThis.WebThenResize?.fit();
})();
