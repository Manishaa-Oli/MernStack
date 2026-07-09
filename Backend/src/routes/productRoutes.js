import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoute=Router()

productRoute
.route("/")//url is localhost:8000/product because we provided  product from index.js
.post(async(req,res,next)=>{
    try {
        let result=await Product.create(req.body)
        
        res.json({
            success: true,
            message: "product created successfully.",
            result: result,

   })
    } catch (error) {
        res.status(400).json({ 
            success:false,   //for error message we are using status 400 because it is a bad request
            message:error.message,
        })
    }

    
   // console.log(req.body)
   // res.json("product router created successfully.")

})

.get(async(req,res,next)=>{
    try {
        let result=await Product.find()
        res.json({
            success: true,
            message: "Product read successfully",
            result: result,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })

        
    }
})


productRoute
.route("/:id")
.get(async(req,res,next)=>{
   // console.log(req.params.id)
   try {
        let result=await Product.findById(req.params.id)

        res.json({
            success: true,
            message: " data read successfully.",
            result: result,})
   } catch (error) {
     res.status(400).json({
        success: false,
        message: error.message,
     })
   }
   
   })
.patch(async(req,res,next)=>{
    try {
        let result= await Product.findByIdAndUpdate(req.params.id,req.body)
        res.json({
            success: true,
            message:"data updated successfully.",
            result: result,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
        
    }
})
.delete(async(req,res,next)=>{
    try {
        let result= await Product.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "product deleted successfully.",
            result: result,
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        })
        
    }
})


export default productRoute