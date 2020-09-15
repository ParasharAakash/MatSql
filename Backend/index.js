const express = require('express');
require ("dotenv").config();
mysqlconnection = require('./api/Config/connection');
const bodyparser = require('body-parser');
const productsRoutes = require('./api/Routes/products');
const usersRoutes = require('./api/Routes/users');
const ordersRoutes = require('./api/Routes/orders');
const fileUpload = require('express-fileupload');




app=express();

app.use(express.static('./public'));


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    	   extended: true
    	}))

app.use(fileUpload());
app.use("/products",productsRoutes);


app.use("/users",usersRoutes);


app.use("/orders",ordersRoutes);





app.listen(process.env.app_port,()=>{
    console.log(`server Started at port ${process.env.app_port} `);
});