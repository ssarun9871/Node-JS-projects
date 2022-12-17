const fs = require('fs');


const requestHandler =(req,res)=>{
    const url = req.url; 
    const method = req.method;

    if(url=='/'){
        fs.readFile('message.txt','utf-8',(err,data)=>{
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(`<body><p>${data}</p><form action="/message" method="POST"><input type="text" name="message"><button type ="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        })
       
     }
     
     if(url== '/message' && method=='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
     
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location','/');
     
                return res.end();
                
            });
        });
        }
     
        
     else if(url=='/home'){
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
};

/* 1 */
module.exports = requestHandler;

/* 2 
can be accese like routes.handler */
module.exports = {
    handler : requestHandler,
    someText:'Some hard coded text'
}

/*3*/
module.exports.handler = requestHandler;

/*4*/
exports.handler = requestHandler;
