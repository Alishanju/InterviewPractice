let express=require("express");
let mongoose=require("mongoose");
const enquireRouter = require("./App/routes/web/userRoutes");
require('dotenv').config();

let app=express();
mongoose.connect(process.env.DBURL).then(()=>{
    console.log("CONNECTED TO Mongoose");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on Port "+ process.env.PORT)
    })
})

app.use(express.json());

app.use("/web/api/enquiry",enquireRouter)

//http://localhost:8000/web/api/enquiry/enquiry-insert
//http://localhost:000/web/api/enquiry/enquiry-list
//http://localhost:8000/web/api/enquiry/enquiry-delete/:id
//http://localhost:8000/web/api/enquiry/enquiry-update/:id  
