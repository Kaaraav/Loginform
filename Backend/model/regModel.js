import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const regSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const regModel=mongoose.model("regModel",regSchema)
export default regModel;