

import generateToken from '../utils/jwt.js';
import validateLoginInput from '../validations/login.js';

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