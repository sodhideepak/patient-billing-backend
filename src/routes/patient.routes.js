import { Router } from "express";
import {
    registerpatient,
    getpatient,
    allpatients
     } from "../controllers/patient.controller.js";


const router =Router()

router.route("/register").post(registerpatient)

router.route("/getpatient").get(getpatient)

router.route("/allpatients").get(allpatients)


export default router 