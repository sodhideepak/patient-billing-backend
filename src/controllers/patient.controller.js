import { asynchandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { patient } from "../models/patient.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { log } from "console";

const registerpatient = asynchandler(async (req,res)=>{
    
    console.log("hello");
    
    const {fullname,
        DOB,
        phone_number,
        gender,
        email,
        address,
        department,
        doctor,
        fees,
        paymentMethod,}= req.body
    

    

    if([fullname,email,phone_number,gender,DOB,department,doctor].some((field)=> field?.trim()==="")) {
        throw new ApiError(400,"all fields are required")
    }


    const cleanDOB = new Date(DOB);
    console.log(cleanDOB);
    cleanDOB.setUTCHours(0, 0, 0, 0);
 
    console.log(DOB);
    console.log(cleanDOB);
    
    const Patient=await patient.create({
        fullname,
        DOB:cleanDOB,
        phone_number,
        gender,
        email,
        address,
        department,
        doctor,
        fees,
        paymentMethod,
       

    })

    const createdpatient =await patient.findById( Patient._id);
    if (!createdpatient) {
        throw new ApiError(500,"something went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(200,createdpatient,"patient registered sucessfully")
    )

})






const getpatient =asynchandler(async(req,res)=>{

   

    const patient_data= await patient.findById(req.body._id);

    // const year = req.user.DOB.getUTCFullYear();
    // const month = (req.user.DOB.getUTCMonth() + 1).toString().padStart(2, '0');
    // const day = req.user.DOB.getUTCDate().toString().padStart(2, '0');
    // const formattedDate = `${year}-${month}-${day}`;
    
    // user_data.DOB=formattedDate
    // user_data.age=calculate_age(req.user.DOB)


    return res
    .status(200)
    .json(new ApiResponse(200,patient_data,"user fetched sucessfully"))
    // .json(new ApiResponse(200,req.user,"user fetched sucessfully"))

})








const allpatients = asynchandler(async (req,res)=>{

    
    
    const Patients = await patient.find();
  

  


    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            
            Patients
            ,
            "Patients data fetched sucessfully")
    )

})




const updateAccountDetails =asynchandler(async(req,res)=>{

    const {fullname,email,gender,phone_number,DOB}=req.body
    const user_data = await user.findById(req.user._id)

    if(!fullname || !email){
        throw new ApiError(400,"all fields are required")
    }
    let is_email_verified;
    if(user_data.email==email&user_data.is_email_verified==true){
        is_email_verified=1
    }else{
        is_email_verified=0
    }

    const userdata =await user.findByIdAndUpdate(
        user_data._id,{
            $set: {
                fullname,
                email,
                phone_number,
                DOB,
                gender,
                is_email_verified
            },
           
        }, 
        {
            new:true
        }
    ).select("-password -refreshToken -token").lean()

 
    const year = userdata.DOB.getUTCFullYear();
    const month = (userdata.DOB.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = userdata.DOB.getUTCDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    userdata.DOB=formattedDate
    userdata.age=calculate_age(userdata.DOB)

  
    return res
    .status(200)
    .json(new ApiResponse(200,userdata,"user account details updated sucessfully"))

})







export {
    registerpatient,
    getpatient,
    allpatients
    }
