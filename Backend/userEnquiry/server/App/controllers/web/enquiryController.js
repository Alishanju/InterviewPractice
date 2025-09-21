const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert=(req,res)=>{
 let {name,email,mobile,message}=req.body;
   
    // let newEnquiry=new enquiryModel({
    //     name:sName,
    //     email:sEmail,
    //     mobile:sMobile,
    //     message:sMessage
    // });
    //let newEnquiry=new enquiryModel(req.body);
     let newEnquiry = new enquiryModel({
    name,
    email,
    mobile,
    message
  });

    newEnquiry.save().then((data)=>{
        res.status(201).json({message:"Enquiry Submitted Successfully",data:data})
    }).catch((err)=>{
        res.status(500).json({message:"Error in Enquiry Submission",error:err})
    })
}


let enquiryList=async(req,res)=>{
    let enquiryList=await enquiryModel.find();
    res.status(200).json({message:"Enquiry List",data:enquiryList})
}

let enquiryDelete=async(req,res)=>{
    let id=req.params.id;   
    let deletedEnquiry=await enquiryModel.deleteOne({_id:id});
    res.status(200).json({message:"Enquiry Deleted",data:deletedEnquiry});
}
 let enquirySingleRow=async(req,res)=>{
    let id=req.params.id;   
    let singleEnquiry=await enquiryModel.findOne({_id:id});
    res.status(200).json({message:"Single Enquiry Fetched",data:singleEnquiry});
//     try{
//     const singleEnquiry = await enquiryModel.findById(id); // findById is cleaner than findOne({_id:id})

//     if (!singleEnquiry) {
//       return res.status(404).json({ message: "Enquiry not found" });
//     }

//     res.status(200).json({ message: "Single Enquiry Fetched", data: singleEnquiry });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching enquiry", error: err });
//   }
}

let enquiryUpdate=async(req,res)=>{
    let id=req.params.id;   
    let {name,email,mobile,message}=req.body;
    let updatedObj={
        name,
        email,
        mobile,
        message 

    }
    let updatedEnquiry=await enquiryModel.updateOne({_id:id},{$set:updatedObj});;
    res.status(200).json({message:"Enquiry Updated",data:updatedEnquiry});
}

module.exports={enquiryInsert,enquiryList,enquiryDelete,enquirySingleRow,enquiryUpdate};