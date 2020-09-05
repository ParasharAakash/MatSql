const express = require("express");
const Router = express.Router();
const productController = require('../Controllers/Products');




Router.get('/',productController.getProducts);


Router.get('/:id',productController.getProduct);



Router.put('/:id',productController.updateProduct);


Router.delete('/:id',productController.removeProduct);
    

Router.post('/create',productController.createProduct);

module.exports=Router;