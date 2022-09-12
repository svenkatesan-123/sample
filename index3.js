const express = require('express');
const app = express();
app.get('',(req,res)=>{
    
  res.send("<h1>hello world</h1>");
});
app.get('/about',(req,res)=>{
    res.send('Hello,this is About Page');
  });
  app.listen(5000);
