const db = require("../Config/connection");

exports.getOrders=(req,res)=>{
    db.query(" select * from orders ",
    (err,results,fields)=> {
        if(!err)
        {
            return  res.status(200).json({
               results
            });
        }
        else{
            console.log(err);
            return res.status(404).json({
                success : 0,
                message : results
            })
        }
    })
}

exports.getOrder=(req,res)=>{
    db.query("select * from orders where o_id=?",[req.params.id],
    (err,results,fields)=>{
        if(!err)
        {
            return  res.status(200).json({
               results
            });
        }
        else{
            console.log(err);
            return res.status(404).json({
                success : 0,
                message : results
            })
        }
    })
}

exports.Order=(req,res)=>{
const Data=Object.values(req.body);
console.log(Data);
[u_id,p_id,quantity]=Data;
db.query("select Count(o_id) from orders where u_id=? and p_id=?",
[u_id,p_id],
(err,results,feilds)=>{
    if(err){
        console.log(err);
            return res.status(404).json({
                success : 0,
                message : results
            })
    }
    else{
        db.query("Insert into orders(u_id,p_id,quantity) values(?,?,?)",
[u_id,p_id,quantity],
(err,results,feilds)=>{
    if(!err)
    {
        return  res.status(200).json({
           results
        });
    }
    else{
        console.log(err);
        return res.status(404).json({
            success : 0,
            message : results
        })
    }
})
        }
})

}

exports.delOrder=(req,res)=>{
    db.query('Delete from orders where o_id=?',[req.params.id],
    (err,results,feilds)=>{
        if(err){
            return err;
        }
        else{
            return res.status(200).json("Order Deleted");
        }
    })
}

exports.one=(req,res)=>{
    db.query("select distinct u_id from orders where p_id=?",[req.params.id],
    (err,results,feilds)=>{
        if(!err)
    {   console.log(results)
        // while(Object.keys(results)){
            console.log(Object.values(results))
        // }
        return  res.status(200).json({
            results
        });
    }
    else{
        console.log(err);
        return res.status(404).json({
            success : 0,
            message : results
      
})
    }
})
}


exports.two=(req,res)=>{
    db.query("select distinct p_id from orders where u_id=?",[req.params.id],
    (err,results,feilds)=>{
        if(err)
    {   
        return res.status(404).json({
            success : 0,
            message : results
        });
    }
    else{
        console.log(results[0].p_id);
        db.query("select * from products where pid=?",[results[0].p_id],
        (err,results,feilds)=>{
            if(err)
            return err;
            else{
                return  res.status(200).json({
                   results
        })
    }
      
})
    }
})
}

exports.max=(req,res)=>{
    db.query("select p_id from orders order by quantity desc",
    (err,results,fields)=> {
        if(!err)
        {
            return  res.status(200).json({
               results
            });
        }
        else{
            console.log(err);
            return res.status(404).json({
                success : 0,
                message : results
            })
        }
    })
}