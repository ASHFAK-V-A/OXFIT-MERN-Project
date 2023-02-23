
import validateRegisterInput from '../validations/register.js';
import validateLoginInput from '../validations/login.js';
import bcrypt from 'bcrypt'
import User from '../models/Users.js';
import generateToken from '../utils/jwt.js';




export const Signup=async(req,res)=>{
    try { 
        const { errors, isValid } = validateRegisterInput(req.body);
        const {name,email,password}=req.body

        if(!isValid) { 
            return res.status(400).json(errors);
        }

     const user= await User.findOne({email:email})

   if(user){
    return res.status(400).json({email:"Email already exists"})
     }
     
     console.log(password);
const hashPasw=await bcrypt.hash(password,10)


const newUser = new User({

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

export const Login=(async(req,res)=>{
    let token
    const { errors, isValid } = validateLoginInput(req.body);
    const {email,password}=req.body
    if(!isValid) { 
        return res.status(400).json(errors);
    } 


    try {

 User.findOne({email:email}).then((user)=>{
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