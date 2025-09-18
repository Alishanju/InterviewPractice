let express=require("express");
let mongoose=require("mongoose");
 let EnquireModel=require("./models/enquiry.model");
 console.log("Enquire Model:",EnquireModel);
require('dotenv').config();
let app=express();
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("CONNECTED TO Mongoose");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on Port "+ process.env.PORT)
    })
})
app.use(express.json());

app.post("/api/enquiry-insert",(req,res)=>{
    let {sName,sEmail,sMobile,sMessage}=req.body;
   
    let newEnquiry=new EnquireModel({
        name:sName,
        email:sEmail,
        mobile:sMobile,
        message:sMessage
    });
    newEnquiry.save().then((data)=>{
        res.status(201).json({message:"Enquiry Submitted Successfully",data:data})
    }).catch((err)=>{
        res.status(500).json({message:"Error in Enquiry Submission",error:err})
    })

});

app.get("/api/enquiry-list",async(req,res)=>{
    let enquiryList=await EnquireModel.find();
    res.status(200).json({message:"Enquiry List",data:enquiryList})
});

app.delete("/api/enquiry-delete/:id",async(req,res)=>{
    let id=req.params.id;   
    let deletedEnquiry=await EnquireModel.deleteOne({_id:id});
    res.status(200).json({message:"Enquiry Deleted",data:deletedEnquiry});
});

app.put("/api/enquiry-update/:id",async(req,res)=>{
    let id=req.params.id;   
    let {sName,sEmail,sMobile,sMessage}=req.body;   
    let updatedObj={
        name:sName,
        email:sEmail,
        mobile:sMobile,
        message:sMessage    

    }
    let updatedEnquiry=await EnquireModel.updateOne({_id:id},{$set:updatedObj});;
    res.status(200).json({message:"Enquiry Updated",data:updatedEnquiry});
});

