(function(){
 'use strict';
 const box=document.querySelector('#webthen-music'),row=box.querySelector('.music-station-row'),sizes=[1,1.5,2];
 const button=document.createElement('button');button.type='button';button.id='thenamp-double-size';row.append(button);
 let preferred=1.5;
 try{const saved=Number(localStorage.getItem('webthen-thenamp-scale-v2'));if(sizes.includes(saved))preferred=saved;else if(localStorage.getItem('webthen-thenamp-scale-v1')==='1')preferred=1}catch(e){}
 function nextSize(){return sizes[(sizes.indexOf(preferred)+1)%sizes.length]}
 function sync(){
  const actual=sizes.filter(size=>size<=preferred&&275*size+14<=innerWidth).at(-1)||1;
  box.style.setProperty('--thenamp-scale',String(actual));box.dataset.skinScale=String(actual);
  const fitted=actual!==preferred;
  button.textContent=actual+'×'+(fitted?' (fit)':'');
  button.setAttribute('aria-label','Player size: '+actual+'×'+(fitted?' (fitted from '+preferred+'×)':'')+'. Click for '+nextSize()+'×.');
  button.title='Current size: '+actual+'×.'+(fitted?' '+preferred+'× is selected; fitted to this screen.':'')+' Click for '+nextSize()+'×.';
  globalThis.WebThenResize?.fit();
 }
 button.onclick=()=>{preferred=nextSize();try{localStorage.setItem('webthen-thenamp-scale-v2',String(preferred))}catch(e){}sync()};
 new MutationObserver(sync).observe(box,{attributes:true,attributeFilter:['class','data-radio-skin']});window.addEventListener('resize',sync);sync();
})();
