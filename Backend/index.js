//console.log("hello welcome to backend development")
/* make express application
attach port to it */

import express, { json } from "express"
import firstRoute from "./src/routes/firstRoute.js"
import productRoutes from "./src/routes/productRoutes.js"
import userRoute from "./src/routes/userRoute.js"
import mongoose from "mongoose"
let app=express()
app.listen(8000,()=>{
    console.log("application is listening at port 8000")
    mongoose.connect("mongodb://localhost:27017/cosmos")
})

app.use(json())//makes our system capable to take data
app.use(firstRoute)
app.use("/product",productRoutes);
app.use("/user",userRoute)
















/* database operations(CRUD)
Create=> post,
Read=> get,
Update=> patch,
Delete=> delete */
/* app.post("/",(req,res,next)=>{
    console.log("a")
})
app.get("/",(req,res,next)=>{  //here "/" represents url localhost:8000
    console.log("b")
})
app.patch("/",(req,res,next)=>{  //here "/" represents url localhost:8000
    console.log("c")
})
app.delete("/",(req,res,next)=>{  //here "/" represents url localhost:8000
    console.log("d")
}) */
