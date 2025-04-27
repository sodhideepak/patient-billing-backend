
import mongoose, { Schema } from "mongoose";
import { type } from "os";




const counterSchema = new mongoose.Schema({
    _id: String,
    seq: Number,
  });
  
  export const Counter = mongoose.model('Counter', counterSchema);
  