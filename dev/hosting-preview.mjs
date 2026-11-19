// Test server only: serves the chosen directory and logs every same-origin request.
// No scripts or instrumentation are injected into the app.
import http from 'node:http';
import {readFile, appendFile, mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const repo=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const root=path.resolve(repo,process.argv[2]||'.');
if(root!==repo&&root!==path.join(repo,'dist'))throw Error('Serve repo or dist only');
const port=Number(process.argv[3]||8871),label=root===repo?'source':'dist';
await mkdir(path.join(repo,'.cache'),{recursive:true});
const log=path.join(repo,'.cache',label+'-requests.jsonl');
const types={'.html':'text/html; charset=utf-8','.json':'application/json','.js':'text/javascript','.css':'text/css','.mp3':'audio/mpeg','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.md':'text/plain'};
const server=http.createServer(async(req,res)=>{
 let pathname;try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end()}
 const name=pathname==='/'?'index.html':pathname.slice(1),target=path.resolve(root,name);
 let data,status=200;
 try{if(!target.startsWith(root+path.sep)||name.startsWith('.'))throw Error();data=await readFile(target)}catch{status=404;data=Buffer.from('Not found')}
 await appendFile(log,JSON.stringify({method:req.method,path:pathname,status})+'\n');
 res.writeHead(status,{'Content-Type':types[path.extname(name)]||'text/plain','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY'});
 res.end(req.method==='HEAD'?undefined:data);
});
server.listen(port,'127.0.0.1',()=>console.log(label+' preview: http://127.0.0.1:'+port));
