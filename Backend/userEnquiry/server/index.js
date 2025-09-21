let express = require('express');
let mongoose=require('mongoose');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();
let app=express();
let PORT=process.env.PORT || 3000;
var cors = require('cors')

 
app.use(cors())
app.use(express.json());
app.use('/api/website/enquiry',enquiryRouter);

//http://localhost:8020/api/website/enquiry/insert ->post
//http://localhost:8020/api/website/enquiry/view  -> get
//http://localhost:8020/api/website/enquiry/delete/:id -> delete
//http://localhost:8020/api/website/enquiry/single/:id -> get single row by id
//http://localhost:8020/api/website/enquiry/update/:id -> PUT


mongoose.connect(process.env.DBURL).then(()=>{
    console.log("DB connected");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=>{
    console.log(err,"DB connection failed");
});