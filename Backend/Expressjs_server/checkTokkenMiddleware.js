 

let checkToken=(req,res,next)=>{
    console.log("Token checking by middleware");
    if(req.query.token==""||req.query.token==undefined){
        return res.send({status:0,msg:"please fill the token"});
    }
    console.log(process.env.myToken)
    if(req.query.token!=process.env.myToken){ //using .env myToken
        return res.send({status:0,msg:"please fill the valid token"});
    }
    
    next(); 
}
module.exports={checkToken}