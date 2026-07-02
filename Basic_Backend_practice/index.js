import express, { json } from "express"

import testRoute from "./src/routes/testRoute.js"
import mongoose from "mongoose"
let app = express()
app.listen(8000,()=>{
    console.log("application is listening at port 8000"),
    mongoose.connect("mongodb://localhost:27017/test")
})
app.use(json())
app.use("/t",testRoute)