import validateLoginInput from "../validations/login.js";
import bcrypt from "bcrypt";
import Members from "../models/Members.js";
import generateToken from "../utils/jwt.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import validateAdmssionForm from "../validations/AdmssionForm.js";

export const Login = async (req, res) => {
  let token;
  const { errors, isValid } = validateLoginInput(req.body);
  const { email, password } = req.body;
  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    Members.findOne({ email: email }).then((user) => {
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user.id,
          };

          token = generateToken(payload);

          user = { ...user._doc, token };
          res.json({
            errorCode: 0,
            msg: "User login successfull",
            status: true,
            data: user,
            name: user.name,
          });
        } else {
          errors.password = "Invalid Password";
          return res.status(404).json(errors);
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const admission = (req, res) => {
  const { errors, isValid } = validateAdmssionForm(req.body);


  if(!isValid){
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
console.log(req.body);
  console.log(Dob);

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
          gender:gender,
          address: address,
          phonenumber: phonenumber,
          pincode: pincode,
          dob: Dob,
          isApplication: true,
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
          gender:1,
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
        console.log(members);
        res.status(200).json(members[0]);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({
            message: "An error occurred while retrieving the member data.",
          });
      });
  } catch (error) {
    console.log(error.message);
  }
};
