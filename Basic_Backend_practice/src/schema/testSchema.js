import { model, Schema } from "mongoose";

let testSchema=Schema({
    name:{
        type: String,
        required:[true,"name must be filled"],
    },
    address:{
        type:String,
        required:[true,"address is needed."],
    },

})
let Test=model("Mydata",testSchema)
export default Test