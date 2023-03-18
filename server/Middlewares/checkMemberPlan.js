import mongoose from "mongoose";
import moment from "moment";
import Members from "../models/Members.js";


const checkPlanExpiration= async (req,res,next)=>{
    try {
        
        const memberId = req.user


const member = await  Members.findById(memberId)

if (!member) {
    return res.status(400).json({ message: "Member not found" });
  }


  const planExpirationDate = moment(member.planExpirationDate);
  const currentDate = moment();
  if (currentDate.isAfter(planExpirationDate)) {
try {


    await Members.findOneAndUpdate(
        { _id: memberId },
        { $set: { isApplication: false } }
      );
     return res
    .status(400)
    .json({ message: "Your monthly rent is due. Please make a payment to continue using our services." });  
} catch (error) {
    console.log(error.message);
}
 
  }else{
    next()
  }


    } catch (error) { 
        console.log(error.message);
    }
}

export default checkPlanExpiration