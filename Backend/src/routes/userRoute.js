import { Router } from "express";
import User from "../schema/userSchema.js";

let userRoute=Router()

userRoute
.route("/")//url is localhost:8000/user because we provided  user from index.js
.post(async(req,res,next)=>{
    try {
        let result=await User.create(req.body)
        
        res.json({
            success: true,
            message: "user created successfully.",
            result: result,

   })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
    }

    
   // console.log(req.body)
   // res.json("user router created successfully.")

})

.get(async(req,res,next)=>{
    try {
        let result=await User.find()
        res.json({
            success: true,
            message: "User read successfully",
            result: result,
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        })

        
    }
})


userRoute
.route("/:id")
.get(async(req,res,next)=>{
   // console.log(req.params.id)
   try {
        let result=await User.findById(req.params.id)

        res.json({
            success: true,
            message: " data read successfully.",
            result: result,})
   } catch (error) {
     res.json({
        success: false,
        message: error.message,
     })
   }
   
   })
.patch(async(req,res,next)=>{
    try {
        let result= await User.findByIdAndUpdate(req.params.id,req.body)
        res.json({
            success: true,
            message:"data updated successfully.",
            result: result,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
    }
})
.delete(async(req,res,next)=>{
    try {
        let result= await User.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "user deleted successfully.",
            result: result,
        })
    } catch (error) {
        res.json({
            success:false,
            message: error.message,
        })
        
    }
})


export default userRoute