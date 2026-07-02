import { Router } from "express";

const productRoutes=Router()


productRoutes
.route("/")
.post((req,res,next)=>{
    res.json("product created successfully")
})
.get((req,res,next)=>{})

productRoutes
.route("/:id")
.get((req,res,next)=>{})
.patch((req,res,next)=>{})
.delete((req,res,next)=>{})

export default productRoutes;