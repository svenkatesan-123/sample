const data=require('./data')
const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);