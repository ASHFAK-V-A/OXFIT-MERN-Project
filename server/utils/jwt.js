import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const generateToken = (payload) => {
  try {
    if (payload == process.env.ADMIN_EMAIL) {
      const options = {
        expiresIn: "3d",
      };
      return jwt.sign(payload, process.env.ADMIN_SECRET, options);
    }
    const options = {
      expiresIn: "3d",
    };
    return jwt.sign(payload, process.env.JWT_SECRET, options);
  } catch (error) {
    console.log(error.message);
  }
};

export const decodeToken = (token)=>{
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const id = decode.id;
        const objid = mongoose.Types.ObjectId(id);
        console.log(objid);
        return objid
    } catch (error) {
        console.log(error.message);
    }
}

export default generateToken;
