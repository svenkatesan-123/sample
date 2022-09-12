const fs=require('fs');
const http = require('http');
const colors=require('colors');
http.createServer((req,res)=>{
 res.write("<h1>hello this is something355</h1>");
 res.end();
}).listen(4500);
const app=require('./app')
var a=20;
var b=20;
var c=20;

if(c==20){
    console.log("hello world".green);
}
else{
    console.log("not equal");


}
//hello world
for(var i=0;i<20;i++){
    console.log("hello world",i)
}
while(a){
    console.log(a);
    a--;
}
function add(){
    let a=20;
    let b=30;
   return a+b;
}
console.log(add());
const arr=[2,3,4,5,3]
console.log(arr[0])
console.log(app.x+app.y)
app.z()
let result = arr.filter((item)=>{
 return item===3
})
console.log(result)
fs.writeFileSync("hello.txt","code step by step");
console.log("hello shankar");
