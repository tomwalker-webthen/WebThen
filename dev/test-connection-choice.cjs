const assert=require('node:assert/strict');
const {profile,sequence}=require('../contents/connection-model-v034.js');
assert.deepEqual(profile('flash'),{dialup:false,speed:'Broadband'});
assert.deepEqual(profile('flash','broadband'),profile('flash'));
assert.deepEqual(profile('flash','invalid'),profile('flash'));
assert.deepEqual(profile('flash','dialup'),{dialup:true,speed:'53,333 bps'});
const recorded=sequence('flash',true,'dialup');
assert.equal(recorded[0].text,'Dialing…');
assert(recorded.some(s=>s.text==='Verifying user name and password…'));
assert(recorded.some(s=>s.text==='Logging on to network…'));
assert(recorded.some(s=>s.at===18000&&s.text==='Connected at 53,333 bps'));
assert.equal(recorded.at(-1).at,18500);
const silent=sequence('flash',false,'dialup');assert.equal(silent.at(-1).at,5000);
assert.deepEqual(sequence('flash',true,'broadband'),sequence('flash',false,'broadband'));
assert.equal(sequence('flash',true,'broadband').at(-1).at,1100);
for(const era of ['early','boom','social','modern']){
 assert.deepEqual(profile(era,'dialup'),profile(era));
 assert.deepEqual(sequence(era,true,'dialup'),sequence(era,true));
}
console.log('PASS: 2002–2004 defaults to broadband, supports recorded/silent 53,333 bps dial-up, preserves broadband timing and all other era profiles.');
