import { Router } from "express";
import Test from "../schema/testSchema.js";

let testRoute=Router()

testRoute
.route("/")
.post(async(req,res,next)=>{
    try {
        let result= await Test.create(req.body)
        res.json({
            success:true,
            message: "user created successfully.",
            result:result,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        })
        
    }

})
export default testRoute