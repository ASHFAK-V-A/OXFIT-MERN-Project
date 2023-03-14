import validateRegisterInput from "../validations/register.js";
import PlanSchema from "../models/Plans.js";
import MembersSchema from "../models/Members.js";
import MemberShipFeeScheam from "../models/memberShipFee.js";
import bcrypt from "bcrypt";



export const AddMember = async (req, res) => {
  try {
    const { errors, isValid } = validateRegisterInput(req.body);
    const { name, email, password } = req.body;

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const user = await MembersSchema.findOne({ email: email });

    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    console.log(password);
    const hashPasw = await bcrypt.hash(password, 10);

    const newUser = new MembersSchema({
      name,
      email,
      password: hashPasw,
      isApplication: false,
    });

    console.log(newUser);
    const savedUser = await newUser.save();
    return res.json(savedUser);
  } catch (error) {
    console.log(error.message);
  }
};

export const members = (req, res) => {
  MembersSchema.find().then((allmembers) => {
    res.json({
      status: true,
      members: allmembers,
    });
  });
};

export const AddPlan = async (req, res) => {
  console.log(req.body);

  try {
    const plan = new PlanSchema({
      PlanName: req.body.palnname,
      PlanDuration: req.body.planduration,
      PlanAmount: req.body.planeamount,
    });
    await plan.save();
    res.json({
      erorrcode: 0,
      status: true,
      message: "successfully added",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const PlanList = async (req, res) => {
  try {
    const Plans = await PlanSchema.find().sort({ createdAt: -1 });

    console.log(Plans);

    res.json({
      erorrcode: 0,
      status: true,
      data: Plans,
    });
  } catch (error) {
    console.log(error.message);
  }
};


export const addMemberShipFee= async (req,res)=>{

try {
  const fee =req.body.AddmemberShipFee
  console.log(fee);
 MemberShipFeeScheam.updateOne({
 $set:{
  membershipfee:fee
 }
 }).then(()=>{
 res.status(200).json({message:"successfully updated"})
 })

} catch (error) {
console.log(error.message);  
}
}

export const getMemberShip =(req,res)=>{
MemberShipFeeScheam.find().then((membershipfee)=>{
  console.log(membershipfee);
  res.status(200).json(membershipfee[0])
})
}