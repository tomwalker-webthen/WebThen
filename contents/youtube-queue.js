(function(root){
 'use strict';
 const ranges={early:[1995,1998],boom:[1999,2001],flash:[2002,2004],social:[2005,2007],modern:[2008,2009]};
 function createQueue(videos,getEra){
  let era=getEra(),index=0;
  function list(){const r=ranges[era]||[];return videos.filter(v=>!v.externalOnly&&v.era===era&&v.originalYear>=r[0]&&v.originalYear<=r[1])}
  function sync(){const changed=era!==getEra();if(changed){era=getEra();index=0}return changed}
  function current(){return list()[index]||null}
  return{list,current,sync,era:()=>era,select(id){const next=list().findIndex(v=>v.videoId===id);if(next<0)return null;index=next;return current()},next(){const length=list().length;if(length)index=(index+1)%length;return current()},previous(){const length=list().length;if(length)index=(index+length-1)%length;return current()},has(id){return list().some(v=>v.videoId===id)},atEnd(){return index===list().length-1}};
 }
 if(typeof module==='object'&&module.exports)module.exports=createQueue;else root.createWebThenVideoQueue=createQueue;
})(globalThis);
