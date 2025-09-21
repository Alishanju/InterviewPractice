let express=require("express");
let enquireRouter=express.Router();
let {enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate}=require('../../controllers/web/userEnquiryController');

enquireRouter.post("/enquiry-insert",enquiryInsert);

enquireRouter.get("/enquiry-list",enquiryList);

enquireRouter.delete("/enquiry-delete/:id",enquiryDelete);

enquireRouter.put("/enquiry-update/:id",enquiryUpdate);
module.exports=enquireRouter;