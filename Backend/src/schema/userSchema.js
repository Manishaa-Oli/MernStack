import{Schema,model}from "mongoose"
let userSchema= Schema({
    name:{
        type:String,
        required:[true,"name must be filled"],
    },
    address:{
        type:String,
        required:[true,"address is needed."],
    },
    email:{
        type:String,
        required:[true,"email is required."],
    },
    password:{
        type: String,
        required:[true,"password is mandatory."],
    },
    phone:{
        type:Number,
        required:[true,"phone number is needed."],
    },
})

let User =model("User",userSchema)

export default User