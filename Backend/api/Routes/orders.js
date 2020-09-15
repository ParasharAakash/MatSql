const express = require("express");
const Router = express.Router();
const OrdersController = require('../Controllers/Orders');
const multer= require("multer");

Router.get("/",OrdersController.getOrders);

Router.get("/:id",OrdersController.getOrder);

Router.post("/",OrdersController.Order);

Router.delete("/:id",OrdersController.delOrder);

// API to get the list of all the customer who have purchased a particular item.
Router.get("/users/:id",OrdersController.one);

//API to get all products list purchased by a specific custom
Router.get("/products/:id",OrdersController.two);



// Router.get("/productlist",OrdersController.max);

module.exports=Router;





