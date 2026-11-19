const http=require('http'),fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),port=Number(process.env.WEBTHEN_PORT)||8780;
const types={'.mp3':'audio/mpeg','.html':'text/html; charset=utf-8','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.md':'text/plain; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
const server=http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname).slice(1)||'index.html'}catch(e){res.writeHead(400);return res.end('Bad request')}
const target=path.resolve(root,name);if(target!==path.join(root,'index.html')&&!target.startsWith(path.join(root,'contents')+path.sep)){res.writeHead(404);return res.end('Not found')}
if(!Object.hasOwn(types,path.extname(name))){res.writeHead(404);return res.end('Not found')}
fs.readFile(path.join(root,name),(error,data)=>{res.writeHead(error?404:200,{'Content-Type':types[path.extname(name)],'Referrer-Policy':'strict-origin-when-cross-origin','Cache-Control':'no-store'});res.end(error?'Not found':data)})});
server.on('error',error=>{console.error('WebThen could not start: '+error.message);process.exitCode=1});
server.listen(port,'127.0.0.1',()=>{const url='http://127.0.0.1:'+port;console.log('WebThen: '+url+'\nKeep this window open while browsing. Press Ctrl+C to stop.');if(process.argv.includes('--open')){const {spawn}=require('child_process');spawn('cmd.exe',['/c','start','',url],{windowsHide:true,stdio:'ignore'})}});
