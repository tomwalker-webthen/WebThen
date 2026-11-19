(function(root){
 'use strict';
 const ranges={early:[1995,1998],boom:[1999,2001],flash:[2002,2004],social:[2005,2007],modern:[2008,2009]};
 function periodDate(era){const r=ranges[era]||ranges.flash;return new Date(Date.UTC(Math.floor((r[0]+r[1])/2),9,15,12))}
 function dateLabel(era){return periodDate(era).toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}
 function createSession(initial='flash'){let era=ranges[initial]?initial:'flash';return {get:()=>({era,date:periodDate(era).toISOString(),dateLabel:dateLabel(era)}),commit(next){if(!ranges[next])throw Error('Unknown era');era=next;return this.get()}}}
 const api={createSession,periodDate,dateLabel,ranges};if(typeof module==='object'&&module.exports)module.exports=api;else root.WebThenSessionModel=api;
})(globalThis);
