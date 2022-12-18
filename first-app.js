
const http = require('http');
const express = require('express');
//const routes = require('./routes');
const app = express();
app.use((resq,res,next)=>{
    console.log('In the middleware!');
    next();//allows the request to continue to the next middleware in line
});

app.use((req,res,next)=>{
    console.log('In another middleware');
    res.send({key1:1});
})

const server=http. createServer(app);
app.listen(3000);
