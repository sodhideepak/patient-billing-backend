
import mongoose, { Schema } from "mongoose";
import { type } from "os";

// structure of the data to be stored in database
const patientschema= new mongoose.Schema({
    fullname:{
        type : String,
        required: true,
        trim: true,
    },
    DOB:{
        type: Date,
        required: true,
       
    },
    phone_number:{
        type : String,
        required:true,
        trim: true,
        
    },
    gender:{
        type : String,
        required: true,
        trim: true,
    },
    address:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
      
    },
    department:{
        type:String,
        required:true
    },
    doctor:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    }
    

},{timestamps:true})




export const patient = mongoose.model("patient", patientschema)     