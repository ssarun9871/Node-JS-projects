const http = require('http');

const server=http. createServer((req,res)=>{
 let url = req.url; 

 if(url=='/home'){
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Welcome Home</h1></body>');
    res.write('</html>');
    res.end();
 }

 else if(url =='/about'){
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Welcome to about us page</h1></body>');
    res.write('</html>');
    res.end();
 }

 else if(url =='/node'){
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Welcome to my node js project</h1></body>');
    res.write('</html>');
    res.end();
 }
 

 
});

server.listen(4000);