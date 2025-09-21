const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdate } = require("../../controllers/web/enquiryController");

let express=require('express');
let enquiryRouter=express.Router();;

enquiryRouter.post('/insert',enquiryInsert);
enquiryRouter.get('/view',enquiryList);
enquiryRouter.delete('/delete/:id',enquiryDelete);
enquiryRouter.get('/single/:id',enquirySingleRow);
enquiryRouter.put('/update/:id',enquiryUpdate);

module.exports=enquiryRouter;