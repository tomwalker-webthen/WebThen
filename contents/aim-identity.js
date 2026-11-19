(function(root){
 'use strict';
 const starters=["copperSatellite","copperCassette","copperComet","copperSticker","copperOtter","copperPencil","copperRocket","copperDoodle","copperKite","copperLemon","velvetSatellite","velvetCassette","velvetComet","velvetSticker","velvetOtter","velvetPencil","velvetRocket","velvetDoodle","velvetKite","velvetLemon","marbleSatellite","marbleCassette","marbleComet","marbleSticker","marbleOtter","marblePencil","marbleRocket","marbleDoodle","marbleKite","marbleLemon","ochreSatellite","ochreCassette","ochreComet","ochreSticker","ochreOtter","ochrePencil","ochreRocket","ochreDoodle","ochreKite","ochreLemon","saffronSatellite","saffronCassette","saffronComet","saffronSticker","saffronOtter","saffronPencil","saffronRocket","saffronDoodle","saffronKite","saffronLemon","paperSatellite","paperCassette","paperComet","paperSticker","paperOtter","paperPencil","paperRocket","paperDoodle","paperKite","paperLemon","fuzzySatellite","fuzzyCassette","fuzzyComet","fuzzySticker","fuzzyOtter","fuzzyPencil","fuzzyRocket","fuzzyDoodle","fuzzyKite","fuzzyLemon","sugarSatellite","sugarCassette","sugarComet","sugarSticker","sugarOtter","sugarPencil","sugarRocket","sugarDoodle","sugarKite","sugarLemon","cobaltSatellite","cobaltCassette","cobaltComet","cobaltSticker","cobaltOtter","cobaltPencil","cobaltRocket","cobaltDoodle","cobaltKite","cobaltLemon","wobblySatellite","wobblyCassette","wobblyComet","wobblySticker","wobblyOtter","wobblyPencil","wobblyRocket","wobblyDoodle","wobblyKite","wobblyLemon"];
 const valid=name=>typeof name==='string'&&/^[A-Za-z][A-Za-z0-9_]{2,15}$/.test(name);
 function createIdentity(options={}){
  const storage=options.storage,random=options.random||Math.random,listeners=new Set();
  const read=key=>{try{return storage?.getItem(key)||null}catch(e){return null}};
  const write=(key,value)=>{try{if(!storage)return false;if(value===null)storage.removeItem(key);else storage.setItem(key,value);return true}catch(e){return false}};
  function suggest(){const last=read('webthen-aim-last-starter-v1'),pool=starters.filter(name=>name!==last),name=pool[Math.min(pool.length-1,Math.floor(random()*pool.length))];write('webthen-aim-last-starter-v1',name);return name}
  const saved=read('webthen-aim-screen-name-v1');let name=valid(saved)?saved:suggest(),remembered=valid(saved);
  const notify=()=>listeners.forEach(fn=>fn(name));
  return {get:()=>name,isSaved:()=>remembered,suggest,subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn)},save(value){value=String(value).trim();if(!valid(value))return {ok:false,error:'Use 3–16 characters: start with a letter, then letters, numbers or underscores.'};name=value;remembered=write('webthen-aim-screen-name-v1',name);notify();return {ok:true,persistent:remembered}},useRandom(){const persistent=write('webthen-aim-screen-name-v1',null);name=suggest();remembered=false;notify();return {ok:true,persistent}}};
 }
 createIdentity.starters=starters;createIdentity.valid=valid;
 if(typeof module==='object'&&module.exports){module.exports=createIdentity;return}
 let storage;try{storage=localStorage}catch(e){}root.WebThenScreenName=createIdentity({storage});
})(globalThis);
