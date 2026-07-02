//make routes
//use that routes at index

import { Router } from "express";

let firstRoute=Router()

export default firstRoute

firstRoute
.route("/")
.get((req,res,next)=>{
    console.log(req.body)
    console.log("a")
})
.post((req,res,next)=>{
    console.log("b")
})

firstRoute
.route("/job")
.get((req,res,next)=>{
    console.log("c")
})

firstRoute
.route("/:id1/a/:id2")//using the colon before the id we make it dynamic
.get((req,res,next)=>{
    console.log("it's a dynamic params")
    console.log(req.params)//to get dynamic params
})
