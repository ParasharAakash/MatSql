const mysql = require('mysql');
require ("dotenv").config();

const db=mysql.createConnection({
    host : process.env.db_host,
    user : process.env.db_user,
    password : process.env.db_pass,
    database : process.env.mysql_db,
    multipleStatements : true
});


db.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`MySql Connected!`);
    }
});


module.exports=db;