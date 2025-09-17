let express=require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");
let app=express();
let PORT="8000"

app.use(express.json());

app.get("/student-read",async(req,res)=>{
    let myDB=await dbConnection();
    let studentCollection= myDB.collection("students")
     let data=await studentCollection.find().toArray(); 
    let resObj={status:1,msg:"Students list",data}
    res.send(resObj);
})

app.post("/student-insert",async(req,res)=>{
    let myDB=await dbConnection();
    let studentCollection= myDB.collection("students")
    // let obj={
    //     sName:req.body.sName,
    //     sEmail:req.body.sEmail
    // }
    let {sName,sEmail}=req.body;
    // check if email already exists
        let existingStudent = await studentCollection.findOne({ sEmail }); //returns semail related object if existing email exists in collection ,otherwise null
        if (existingStudent) {
            return res.send({
                status: 2,
                msg: "Email already exists, please try another one"
            });
        }
    let obj={sName,sEmail}
    console.log(obj);
    let insertObj=await studentCollection.insertOne(obj); //this is refelected in database too (mongodb compass)
    let resObj={status:1,msg:"Data inserted",insertObj}
    res.send(resObj)
})


app.delete("/student-delete/:id",async(req,res)=>{
    let {id}=req.params; //{id:68ca39a50c13e9c349a45313}->deleted
    let myDB=await dbConnection();
    let studentCollection= myDB.collection("students")
     let data=await studentCollection.deleteOne({_id:new ObjectId(id)}); //this is refelected in database too (mongodb compass)
    let resObj={status:1,msg:"Data deleted",data}
    res.send(resObj);
})

app.put("/student-update/:id",async(req,res)=>{
    let {id}=req.params; //{id:68ca390f617972fc662505ae}->update
     let {sName,sEmail}=req.body;
     let obj={};
    //  if(sName!=="" && sName !==undefined && sName!==null){
    //     obj['sName']=sName;
    //  }

    //   if(sEmail!=="" && sEmail !==undefined && sEmail!==null){
    //     obj['sEmail']=sEmail;
    //  }
     // use nullish coalescing (??) to check only null/undefined, 
    // and also check for non-empty string
    if (sName?.trim() ?? false) obj.sName = sName;
    if (sEmail?.trim() ?? false) obj.sEmail = sEmail;
    
    let myDB=await dbConnection();
    let studentCollection= myDB.collection("students")
     let data=await studentCollection.updateOne({_id:new ObjectId(id)},{$set:obj}); //this is refelected in database too (mongodb compass)
    let resObj={status:1,msg:"Data updated",data}
    res.send(resObj);
})

app.listen(PORT,()=>{
    console.log("server listening on port:"+PORT) //http://localhost:8000/
})