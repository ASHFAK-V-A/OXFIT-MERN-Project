import generateToken from "../utils/jwt.js";
import validateLoginInput from "../validations/login.js";
import bcrypt from "bcrypt";
import Members from "../models/Members.js";

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
  

  export const adminLogin = (req, res) => {
    try {
      let token;
      const { email, password } = req.body;
      const { errors, isValid } = validateLoginInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      if (
        email == process.env.ADMIN_EMAIL &&
        password == process.env.ADMIN_PASSWORD
      ) {
        const payload = {
          email: email,
        };
        token = generateToken(payload);

        console.log(token);
        res.json({
          erorrcode: 0,
          msg: "token generated",
          sataus: true,
          data: token,
        });
      } else {
        errors.msg = "Invalid Email or Password";
  
        return res.status(404).json(errors);
      }
    } catch (error) {
      console.log(error.message);
    }
  };