const express = require('express');
const mysql = require('mysql');
require ("dotenv").config();
mysqlconnection = require('./api/Config/connection');
const bodyparser = require('body-parser');
const productsRoutes = require('./api/Routes/products');
const usersRoutes = require('./api/Routes/users');



app=express();
// port=3000;

app.use(bodyparser.json());

app.use("/products",productsRoutes);


app.use("/users",usersRoutes);





app.listen(process.env.app_port,()=>{
    console.log(`server Started at port ${process.env.app_port} `);
});