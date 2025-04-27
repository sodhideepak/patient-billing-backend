
import mongoose, { Schema } from "mongoose";
import { type } from "os";

// structure of the data to be stored in database
const patientschema= new mongoose.Schema({
    
    patient_id:{
        type : Number,
        required:true
        
    },
    billingId:{
        type : Number,
        required:true
        
    },
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
    cash_in:{
        type:Number,
        required:true
    },
    cash_out:{
        type:Number,
    },
    paymentMethod:{
        type:String,   
    }
    

},{timestamps:true})




export const patient = mongoose.model("patient", patientschema)     