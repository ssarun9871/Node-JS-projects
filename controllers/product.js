const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
Product.fetchAll(products=>{
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });

  });
};


// const path = require('path');
// const rootDir = require('../util/path');

// exports.adminGet = (req,res,next)=>{

//     res.sendFile(path.join(rootDir,'views','add-product.html'));
// }

// exports.adminPost = (req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// }

// exports.shop = (req,res,next)=>{
//     res.sendFile(path.join(rootDir,'views','shop.html'));
// }

