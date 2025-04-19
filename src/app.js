import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import { errorHandler } from "./middlewares/error.middleware.js";
dotenv.config({
    path:"/.env"
})

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGN
}))
         
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public "))

import patientrouter from "./routes/patient.routes.js";




app.use("/api/v1/patient",patientrouter)


app.use(errorHandler);


export {app}