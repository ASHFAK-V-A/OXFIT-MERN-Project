import Members from "../models/Members.js";
import mongoose from "mongoose";
import PlanSchema from "../models/Plans.js";


export const MemberPage =(req,res)=>{
    Members.find().then((allmembers)=>{
        return res.status(200).json(allmembers)
    })
}