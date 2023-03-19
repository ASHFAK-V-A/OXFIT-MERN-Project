import Members from "../models/Members.js";
import mongoose from "mongoose";
import validateAdmssionForm from "../validations/AdmssionForm.js";
import PlanSchema from "../models/Plans.js";
import MemberShipFeeScheam from "../models/memberShipFee.js";
import Razorpay from "razorpay";
import crypto from "crypto";
import moment from "moment";
import { decodeToken } from "../utils/jwt.js";


 export const  Home =  async (req,res)=>{

  try {
    

  // total members count
  const members = await Members.find().count();
  // Filter the data to show only women count
  const womenMembersCount = await Members.countDocuments({ gender: 'female' });

  // Filter the data to show only men count
  const menMembersCount = await Members.countDocuments({ gender: 'male' });

  return res.status(200).json({
    members,
    womenMembersCount,
    menMembersCount

  })


} catch (error) {
    console.log(error.message);
  }




}


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
const id = decodeToken(token)

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
    const id= decodeToken(token)
    Members.aggregate([
      { $match: { _id: id } },

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
  try {
  let token
    token = req.headers.authorization.split(" ")[1]
const id = decodeToken(token)

  function formatDate(date) {
    const d = new Date(date); 
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day = ('0' + d.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
  }
  
  Members.findById(id).then((memberisplan)=>{
    if(memberisplan.isApplication){
      const activationDate = formatDate(memberisplan.planActivationDate);
      console.log(activationDate);
      const expirationDate = formatDate(memberisplan.planExpirationDate);
      console.log(expirationDate);
      const response = { ...memberisplan._doc, planActivationDate: activationDate, planExpirationDate: expirationDate };
      return res.status(200).json(response);
    }else{
      PlanSchema.find()
      .sort({ PlanAmount: 1 })
      .then((isSorted) => {
        res.status(200).json(isSorted);
      });
  };
  }) 
} catch (error) {
    console.log(error.message);
}
  }


export const planAmount = (req, res) => {
  const id = req.params.id;
  const objid = mongoose.Types.ObjectId(id);
  PlanSchema.aggregate([
    { $match: { _id: objid } },
    {
      $project: {
        PlanAmount: 1,
        PlanDuration: 1,
        PlanName: 1,
      },
    },
  ])
    .then((getPlan) => {
      res.status(200).json(getPlan);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getMemberShipFee = (req, res) => {
  MemberShipFeeScheam.find().then((membershipfee) => {
    res.status(200).json(membershipfee[0]);
  });
};

export const tottalAmount = async (req, res) => {
  const id = req.params.id;
  try {
    await MemberShipFeeScheam.find().then((membershipfee) => {
      const membershipFeeAmount = membershipfee[0].membershipfee;

      PlanSchema.findById(id).then((matchedplan) => {
        const selectedplan = matchedplan.PlanAmount;
        const planduration = matchedplan.PlanDuration;
        const plantype = matchedplan.PlanName;
        const totalBill = membershipFeeAmount + selectedplan;
        res.status(200).json({
          totalBill,
          membershipFeeAmount,
          selectedplan,
          planduration,
          plantype,
        });
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const RazorPayInstance = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: req.body.data * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        return res.status(500).json({ message: "Something Went Wrong!" });
      }

      res.status(200).json({ data: order });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const VerifyPayment = async (req, res) => {
  const planid = req.params.id;
  let token;
  try {
    token = req.body.headers.Authorization.split(" ")[1];
    const id =decodeToken(token)
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body.response;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto

      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return res.status(400).json({ message: "Invalid signature sent!" });
    } else {
      const member = await Members.findById(id);
      if (!member) {
        return res.status(400).json({ message: "Member not found" });
      }

      member.isApplication = true;
      member.plan = planid;
      member.populate("plan").then((member) => {
        member.planActivationDate = moment();
        const planDuration = member.plan.PlanDuration;
        const planExpirationDate = moment(member.planActivationDate).add(
          planDuration,
          "months"
        );
        member.planExpirationDate = planExpirationDate;
        member
          .save()
          .then(() => {
            console.log("Member plan expiration date saved successfully.");
          })
          .catch((error) => {
            console.error("Error saving member plan expiration date: ", error);
          });
      });
      console.log("sucesss");
      return res
        .status(200)
        .json({ message: "Admssion Successfully Completed" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

 
 export const PlanRenewal = (req,res) =>{


      PlanSchema.find()
      .sort({ PlanAmount: 1 })
      .then((isSorted) => {
        res.status(200).json(isSorted);
      });


}