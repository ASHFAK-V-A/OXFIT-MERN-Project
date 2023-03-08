

import validateLoginInput from '../validations/login.js';
import validateAdmssionForm from '../validations/AdmssionForm.js';
import bcrypt from 'bcrypt'
import Members from '../models/Members.js';
import generateToken from '../utils/jwt.js';
import  jwt  from 'jsonwebtoken';


export const Login=(async(req,res)=>{
    let token
    const { errors, isValid } = validateLoginInput(req.body);
    const {email,password}=req.body
    if(!isValid) { 
        return res.status(400).json(errors);
    } 


    try {

 Members.findOne({email:email}).then((user)=>{
    if(!user){
        errors.email = 'User not found'
        return res.status(404).json(errors);
    }

    bcrypt.compare(password,user.password).then((isMatch)=>{

        if(isMatch){

            const payload={

                id:user.id,

            }

            token=generateToken(payload)

        user={...user._doc,token}
res.json({
    errorCode:0,
    msg:"User login successfull", 
    status:true,
    data:user,
    name:user.name
})
        }else{
            errors.password = 'Invalid Password'
            return res.status(404).json(errors);
        }
    })   

 })
    } catch (error) {
        console.log(error.message);
    }
    
})

export const admission =((req,res)=>{
    const {

        age,
        Bloodgrp,
        gender,
        address,
        phonenumber,   
        pincode, 
        city,
        Dob,
        token
    } =req.body  
 


try {

   
    if(age<13){

        return res.json({notallowed:"Minimum age requirment is 13"});

     }
       
       
const decode = jwt.verify(token,process.env.JWT_SECRET)
const id = decode.id

Members.findByIdAndUpdate({_id:id}, {
    $set: { 
        age: age,
        Bloodgrp: Bloodgrp,
        city: city,
        gender: gender,
        address: address,
        phonenumber: phonenumber,
        pincode: pincode,
        Dob: Dob,
        isApplication: true
    }
}, { new: true })
.then(updatemember => {
res.json({
  
    data:updatemember
})

})
.catch(err => {
    console.error(err);
    res.status(500).send('Error updating member details');
});


} catch (error) {
    console.log(error.message);
}

})