//in folder, create package.json using npm init -y command, then add file index.js manually
//npm i express creates node modules,package-lock.json,install express in package.json dependencies
//u can also include in scripts -> "start" :"nodemon index.js" => so instread of using nodemon index.js , u can use npm start to run changes
let express=require("express");
let app=express();
app.use(express.json()); //must be used to parse JSON for json body
app.get("/",(req,res)=>{ //http://localhost:8000/
    res.send("Welcome to Home page API");
});

app.get("/news",(req,res)=>{ //http://localhost:8000/news
    res.send({status:1,msg:"Welcome to News page API"})
})
app.post("/login",(req,res)=>{ 
    //http://localhost:8000/login //browser always sends a GET request. so cannot get/login in browser, but can test in thunderclient
    console.log(req.body); //printed in terminal logs not browser logs
    console.log(req);
    res.send({status:1,msg:"Welcome to Login API",data:req.body,opt:"hi"})
})

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
}); ////http://localhost:8000/
