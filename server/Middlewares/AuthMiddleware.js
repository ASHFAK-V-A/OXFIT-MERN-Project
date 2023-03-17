import jwt from 'jsonwebtoken'
import Members from '../models/Members.js'

const protect=async (req,res,next)=>{
    let token 

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){

    try {
        token = req.headers.authorization.split(' ')[1]
 
        const decode= jwt.verify(token,process.env.JWT_SECRET)
 
         req.user =  await Members.findById(decode.id)


           
            next();

          
        } catch (error) {
            console.log(error.message);
            return res.status(401).json({ message: 'Unauthorized' });
          }
  } else {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}


export default protect;