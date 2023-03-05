

import validateLoginInput from '../validations/login.js';
import bcrypt from 'bcrypt'
import Members from '../models/Members.js';
import generateToken from '../utils/jwt.js';



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
    data:user
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

try {

    const {name,age,Bloodgrp,gender,address,phonenumber,pincode,city,Dob}=req.body

    console.log(name);
} catch (error) {
    console.log(error.message);
}

})