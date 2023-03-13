import jwt from 'jsonwebtoken'



const generateToken=(payload)=>{

    try {
console.log(payload,'thi isi spaularodadf');
if(payload==process.env.ADMIN_EMAIL){
    const options = { 
        expiresIn: '3d' 
      };
return jwt.sign(payload,process.env.ADMIN_SECRET,options)
}
 const options = { 
  expiresIn: '3d' 
          };
    return jwt.sign(payload,process.env.JWT_SECRET,options)
    } catch(error) {  
    console.log(error.message); 
    }
}




export default generateToken