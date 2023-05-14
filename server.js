const express = require("express");
const app = express();
const dotenv =require("dotenv");
dotenv.config();
const mongoose  =require("mongoose")
const cors = require("cors");
const user = require("./models/userModel");
const router  = require("./routes/user.route");
//*router

//for accesing json data

app.use(cors());
app.use(express.json());
//for accesing form data
//* middleware
app.use(express.urlencoded({extended:true}));
app.use("/api/users",router)
mongoose.connect("mongodb://127.0.0.1:27017/todoDB"||process.env.uri ).then(()=>{
  console.log("connected");
 
}).catch((err)=>{
console.log(err);

})



app.listen(process.env.PORT ||8080);