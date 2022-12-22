
const path = require('path');
const fs=require('fs');
const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
module.exports = class Product{
  constructor(t){
   this.title = t;
  }

  save(){
    fs.readFile(p,(err,data)=>{
    let products =[];
    if(err)()=>console.log(err);
          
    else{
      products=JSON.parse(data);
    }
 
    products.push(this);
    fs.writeFile(p,JSON.stringify(products),(err)=>{
    if(err)()=>{console.log(err);}
    else {console.log("file write successfully")}
    })
   })
  }

  static fetchAll(cb){
      fs.readFile(p,(err,data)=>{
      if(err){cb([]);}
      else cb(JSON.parse(data));
      });
    }

}