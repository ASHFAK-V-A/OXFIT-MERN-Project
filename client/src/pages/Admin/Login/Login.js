import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setToken } from '../../../redux/Token/auth'
import axios from '../../../axios/axiosInstance'
import { useNavigate } from "react-router-dom";

function  AdminLogin() {
  

  const dispatch =useDispatch()
  const token=useSelector((state)=> state.token)
  console.log('heres',token);

  const navigate = useNavigate()
const initialState={email:'',password:''}

  const [loginForm,serLoginform] = useState(initialState)
  const [errors,setErrors] = useState({});  
  

         const submitHandler=(async(e)=>{
       e.preventDefault()
       await axios.post('/admin/login',{
       email:loginForm.email,
       password:loginForm.password
      }).then((response)=>{
        const { data } = response;
        const isAdmin=data.data
        dispatch(setToken(isAdmin))
navigate('/dashboard')
            }).catch(error=>{
          console.log(error);
       setErrors(error.response.data)
     })
       })
       
      

const onChangeHandler=((e)=>{
  const {name,value}=e.target
serLoginform({...loginForm,[name]:value})
})
console.log(loginForm);
  return (
    <div>
      
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
          value={loginForm.email}
          required/>
             {errors && <p className='fs-6 text-center' style={{color:"red"}}>{errors.email}</p>}
    </div>
    <div className="form-group was-validated  mt-3 mb-2">
        <label className="form-label fs-6" >Password</label>
        <input className="form-control" 
        type="password" 
        id="password"
    name='password'
    onChange={onChangeHandler}
value={loginForm.password}
    placeholder='Enter your Password...'   style={{borderColor:'black',backgroundImage:'none',paddingRight:0}}
    
    />
      {errors && <p className='fs-6  text-center' style={{color:"red"}}>{errors.password}</p>}

      {errors && <p className='fs-6  text-center' style={{color:"red"}}>{errors.msg}</p>}
    </div>
    <div className="form-group ">
        <span className='float-end fs-6'>Forgot password</span>
    </div>
  
<input className="btn btn-primary w-100 mt-4  " type="submit" value="Log in" /> 
    
</form>


</div>
</div>

</div> 


    </div>
  )
}

export default AdminLogin
