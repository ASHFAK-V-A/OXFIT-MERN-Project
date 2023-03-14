import Members from "../models/Members.js";
import mongoose from "mongoose";
import validateAdmssionForm from "../validations/AdmssionForm.js";
import PlanSchema from "../models/Plans.js";
import jwt from "jsonwebtoken";
import MemberShipFeeScheam from "../models/memberShipFee.js";
export const Admission = (req, res) => {
  const { errors, isValid } = validateAdmssionForm(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const {
    age,
    Bloodgrp,
    address,
    phonenumber,
    pincode,
    city,
    gender,
    token,
    Dob,
    state,
  } = req.body;

  try {
    if (age < 13) {
      return res.status(400).json({ age: "Minimum required age is 13" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const id = decode.id;

    Members.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          age: age,
          bloodgroup: Bloodgrp,
          city: city,
          gender: gender,
          address: address,
          phonenumber: phonenumber,
          pincode: pincode,
          dob: Dob,
          state: state,
        },
      },
      { new: true }
    )
      .then((updatemember) => {
        res.json({
          data: updatemember,
        });
      })
      .catch((err) => {
        console.error(err);

        res.status(500).send("Error updating member details");
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const CheckoutUser = (req, res) => {
  let token;

  try {
    token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const id = decode.id;
    const objid = mongoose.Types.ObjectId(id);

    Members.aggregate([
      { $match: { _id: objid } },

      {
        $project: {
          name: 1,
          address: 1,
          age: 1,
          dob: 1,
          gender: 1,
          city: 1,
          gender: 1,
          phonenumber: 1,
          pincode: 1,
          state: 1,
          bloodgroup: 1,
        },
      },
    ])
      .then((members) => {
        res.status(200).json(members[0]);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "An error occurred while retrieving the member data.",
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const memberPlan = (req, res) => {
  PlanSchema.find()
    .sort({ PlanAmount: 1 })
    .then((isSorted) => {
      res.status(200).json(isSorted);
    });
};




export const planAmount = (req,res)=>{
 const id=req.params.id
console.log(id);
const objid = mongoose.Types.ObjectId(id);
PlanSchema.aggregate([
  {$match:{_id:objid}},
  {$project:{
    PlanAmount:1,
    PlanDuration:1,
    PlanName:1
  }}


]).then((getPlan)=>{
  res.status(200).json(getPlan);
}).catch((err)=>{
  console.log(err);
})

}
export const getMemberShipFee =(req,res)=>{
  MemberShipFeeScheam.find().then((membershipfee)=>{
    console.log(membershipfee);
    res.status(200).json(membershipfee[0])
  })
  }