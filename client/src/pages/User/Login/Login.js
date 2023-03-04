import React,{useState,} from 'react'
import './Login.css'
import axios from '../../../axios/axiosInstance'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { setToken } from '../../../redux/Token/auth';


function Login() {

  const token = useSelector((state) => state.token.token);
  console.log(token);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const [errors,setErrors] = useState({});  

const [loginForm,setLoginForm]=useState({
  email:"",
  password:""
})

const submitHandler=async(e)=>{
e.preventDefault()
try {
  
   await axios.post('/login',{
      email:loginForm.email,
      password:loginForm.password
   }).then((response)=>{
    const { data } = response;
    let isUser=data.data.token
     dispatch(setToken(isUser));
     navigate('/')
   }).catch(error=>{
    console.log(error.message);
    setErrors(error.response.data);
   })


} catch (error) {
  console.log(error.message);
}
}


const onChangeHandler=(e)=>{
const {name,value}=e.target
setLoginForm({...loginForm,[name]:value})
}



console.log(loginForm);
  return (

<div className="image-box">
  <div className='body'>


<div className="login">
  <h1 className="text-center">Login</h1>
<form className="needs-validation" onSubmit={submitHandler}>
    <div className="form-group was-validated mt-5 mb-2">
        <label className="form-label fs-6" for="email">Email address</label>
        <input className="form-control" 
        type="email" 
        id="email" 
         autoFocus
          placeholder='Enter your email...'  style={{borderColor:'black',backgroundImage:'none'}}
          onChange={onChangeHandler}
          name='email' 
          required/>
             {errors && <p className='fs-6' style={{color:"red"}}>{errors.email}</p>}
    </div>
    <div className="form-group was-validated  mt-3 mb-2">
        <label className="form-label fs-6" >Password</label>
        <input className="form-control" 
        type="password" 
        id="password"
    name='password'


    onChange={onChangeHandler}
    placeholder='Enter your email...'   style={{borderColor:'black',backgroundImage:'none',paddingRight:0}}
    
    />
           {errors && <p className='fs-6' style={{color:"red"}}>{errors.password}</p>}
    </div>
    <div className="form-group ">
        <span className='float-end fs-6'>Forgot password</span>
    </div>
  
<input className="btn btn-primary w-100 mt-4  " type="submit" value="Log in" /> 
   
</form>


</div>
</div>

</div> 


  )
}

export default Login
