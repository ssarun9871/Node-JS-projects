const path = require('path');
const rootDir = require('../util/path');

exports.adminGet = (req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.adminPost = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}

exports.shop = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
}