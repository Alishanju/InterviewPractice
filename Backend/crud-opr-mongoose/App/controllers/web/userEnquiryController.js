let EnquireModel=require('../../models/enquiry.model');

let enquiryInsert=(req,res)=>{
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

}

let enquiryList=async(req,res)=>{
    let enquiryList=await EnquireModel.find();
    res.status(200).json({message:"Enquiry List",data:enquiryList})
}

let enquiryDelete=async(req,res)=>{
    let id=req.params.id;   
    let deletedEnquiry=await EnquireModel.deleteOne({_id:id});
    res.status(200).json({message:"Enquiry Deleted",data:deletedEnquiry});
}

let enquiryUpdate=async(req,res)=>{
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
}




module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate};