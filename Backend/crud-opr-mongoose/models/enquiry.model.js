let mongoose=require("mongoose");

let userEnquireSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},  
    mobile:{type:String,required:true},
    message:{type:String,required:true}
});

let EnquireModel=mongoose.model("Enquiry",userEnquireSchema); //enquiry is the collection name

module.exports=EnquireModel;