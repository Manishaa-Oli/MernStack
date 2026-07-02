import{Schema,model}from "mongoose"
let productSchema= Schema({
    name:{
        type: String,
        required:[true,"name must be given."]
    },
    price:{
        type: Number,
        required:[true,"price is required."]
    },
    quantity:{
        type:Number,
        required:[true,"quantity is mandatory"]
    },
    description:{
        type :String,
    },
})

let Product=model("Product",productSchema)

export default Product