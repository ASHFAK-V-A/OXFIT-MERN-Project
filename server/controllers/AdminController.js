

import generateToken from '../utils/jwt.js';
import validateLoginInput from '../validations/login.js';
import validateRegisterInput from '../validations/register.js';
import MembersSchema from '../models/Members.js';
import bcrypt from 'bcrypt'


export const adminLogin =(req,res)=>{
    try {
        let token
      const {email,password}=req.body
      const { errors, isValid } = validateLoginInput(req.body);

if(!isValid){
    return res.status(400).json(errors);
}

      if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD){
     
        const payload={
            email:email
        }
  token=generateToken(payload)

  res.json({
    erorrcode:0,
    msg:'token generated',
    sataus:true,
    data:token
  })

      }else{
        errors.msg = 'Invalid Email or Password'

        return res.status(404).json(errors);
      }
       

        
    } catch (error) {
        console.log(error.message);
    }
}


export const AddMember=async(req,res)=>{
    try { 
        const { errors, isValid } = validateRegisterInput(req.body);
        const {name,email,password}=req.body

        if(!isValid) { 
            return res.status(400).json(errors);
        }

     const user= await MembersSchema.findOne({email:email})

   if(user){
    return res.status(400).json({email:"Email already exists"})
     }
     
     console.log(password);
const hashPasw=await bcrypt.hash(password,10)


const newUser = new MembersSchema({

    name,
    email,
    password:hashPasw

})

const savedUser= await newUser.save()
return res.json(savedUser)
    } catch (error) { 
        console.log(error.message);
    }
}


export const members =(req,res)=>{
 
    MembersSchema.find().then((allmembers)=>{
        res.json({
            status:true,
            members:allmembers
         })

    })
 
}