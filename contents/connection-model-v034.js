(function(root){'use strict';
 function profile(era,type='broadband'){return era==='early'?{dialup:true,speed:'28,800 bps'}:era==='boom'||(era==='flash'&&type==='dialup')?{dialup:true,speed:'53,333 bps'}:{dialup:false,speed:'Broadband'}}
 function sequence(era,recording,type='broadband'){const p=profile(era,type);return p.dialup?[{at:0,text:'Dialing…'},{at:recording?9000:1600,text:'Verifying user name and password…'},{at:recording?14500:3200,text:'Logging on to network…'},{at:recording?18000:4500,text:'Connected at '+p.speed},{at:recording?18500:5000,done:true}]:[{at:0,text:'Connecting…'},{at:650,text:'Connected'},{at:1100,done:true}]}
 const api={profile,sequence};if(typeof module==='object'&&module.exports)module.exports=api;else root.WebThenConnectionModel=api;
})(globalThis);
