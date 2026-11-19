const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..'),source=fs.readFileSync(path.join(root,'contents/aim-chats.js'),'utf8');
const fn=source.slice(source.indexOf(' function appendMessage('),source.indexOf(' function unread('));
const games=JSON.parse(fs.readFileSync(path.join(root,'contents/game-library.json'),'utf8')).games;
function run(message){
 const calls=[],parent={children:[],append(...items){this.children.push(...items)}};
 const node=(tag,cls,text)=>({tag,text,append(){}});
 const context={node,document:{createTextNode:text=>({text})},webthenGameLibrary:{games},catalog:[{name:'Line Rider',url:'http://www.linerider.com/'}],WebThenGames:{open:id=>calls.push(['game',id])},openBrowser:x=>calls.push(['archive',x.name]),queueMicrotask:fn=>fn()};
 vm.createContext(context);vm.runInContext(fn,context);context.appendMessage(parent,message);
 const link=parent.children.find(x=>x.tag==='a');assert(link,'Link should be rendered');let prevented=false;link.onclick({preventDefault(){prevented=true}});assert(prevented);return {link,calls};
}
for(const action of [{kind:'catalog',name:'Line Rider',label:'Visit Line Rider · playback untested'},{kind:'game',id:'line-rider-current',label:'Play Line Rider · current browser edition'}]){
 const {link,calls}=run({text:'made a track',action});assert.match(link.text,/current browser edition/);assert.equal(calls[0][0],'game');assert.equal(calls[0][1],'line-rider-current');
}
const archived=run({text:'Original archived quote',archive:true,action:{kind:'catalog',name:'Line Rider',label:'Original link'}});assert.equal(archived.link.text,'Original link');assert.equal(archived.calls[0][0],'archive');
const game=games.find(g=>g.id==='line-rider-current');assert.equal(game.availableFromYear,2006);assert.equal(new URL(game.embedUrl).hostname,'www.linerider.com');assert.match(game.edition,/Current browser edition/);
console.log('PASS: new and previously received simulated Line Rider links open the current player; archived quotes retain their original route and label; edition/year/source are explicit.');
