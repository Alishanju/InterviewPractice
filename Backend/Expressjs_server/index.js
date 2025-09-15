//in folder, create package.json using npm init -y command, then add file index.js manually
//npm i express creates node modules,package-lock.json,install express in package.json dependencies
//u can also include in scripts -> "start" :"nodemon index.js" => so instread of using nodemon index.js , u can use npm start to run changes
let express=require("express");
//install npm i dotenv to create .env file for securely accessing varaibles insteasd of hardcoding in files
require("dotenv").config();
const { checkToken } = require("./checkTokkenMiddleware");
let app=express();
app.use(express.json()); //must be used to parse JSON for json body->inbuilt middleware
// let myToken=12345;
// let myPass="Alisha@123";
// let checkToken=(req,res,next)=>{
//     console.log("Token checking by middleware");
//     if(req.query.token==""||req.query.token==undefined){
//         return res.send({status:0,msg:"please fill the token"});
//     }
//     if(req.query.token!=myToken){
//         return res.send({status:0,msg:"please fill the valid token"});
//     }
    
//     next(); //points to next middleware
// }
// //example :http://localhost:8000/news?token=12345&pass=Alisha@123 to fetch news api
// let checkPass=(req,res,next)=>{
//     console.log("password checking by middleware");
//     if(req.query.pass==""||req.query.pass==undefined){
//         return res.send({status:0,msg:"please fill the password"});
//     }
//     if(req.query.pass!=myPass){
//         return res.send({status:0,msg:"please fill the valid password"});
//     }
    
//     next();//points to api
// }
// app.use(checkToken); // application level middleware to check token
// app.use(checkPass); // application level middleware to check password
// //application level middleware focuses on entire app-> all urls uses this middleware 

// 


app.get("/",(req,res)=>{ //http://localhost:8000/
    res.send("Welcome to Home page API");
});

app.get("/news",checkToken,(req,res)=>{ ////Route level middleware focuses only on one particular route,doesnt impact other url routes
// //http://localhost:8000/news
    res.send({status:1,msg:"Welcome to News page API"})
})

app.get("/news/:id",(req,res)=>{ //http://localhost:8000/news/dynamicdata(1,2,alisha, some symbols etc)
    let currentId=req.params.id;
    res.send("Dynamic routing,id used is:"+currentId);
})


app.post("/login",(req,res)=>{ 
    //http://localhost:8000/login //browser always sends a GET request. so cannot get/login in browser, but can test in thunderclient
    console.log(req.body); //printed in terminal logs not browser logs
    console.log(req);
    res.status(200).json({status:1,msg:"Welcome to Login API",bodyData:req.body,queryData:req.query});//other way of sending response based on response status
    //res.send({status:1,msg:"Welcome to Login API",bodyData:req.body,queryData:req.query})
})

app.listen(process.env.PORT || 5000, () => { //using .env PORT variable
  console.log("Server running at http://localhost:8000");
}); ////http://localhost:8000/
