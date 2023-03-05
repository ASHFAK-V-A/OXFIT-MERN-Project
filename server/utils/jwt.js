import jwt from 'jsonwebtoken'



const generateToken=(payload)=>{
    try {
        const options = { 
            expiresIn: '3d' 
          };
    return jwt.sign(payload,process.env.JWT_SECRET,options)
    } catch(error) {  
    console.log(error.message); 
    }
}




export default generateToken