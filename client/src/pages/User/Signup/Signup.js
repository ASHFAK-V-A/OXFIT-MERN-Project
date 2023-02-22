import React ,{useState}from 'react'
import  './Signup.css'
import { Link } from 'react-router-dom'
import axios from '../../../axios/axiosInstance.js'



function Signup() {


const [signupform,setSignUpForm]=useState({
  name:"",
  email:"",
  password:"",
  password_confirm:""
})


const onChangeHandler =(e)=>{
const {name,value}=e.target
setSignUpForm({...signupform,[name]: value})
}

const submitHandler=async(e)=>{
  e.preventDefault()
try {
  await axios.post('/signup',{
    hello:"hii"
  })
  
} catch (error) {
  console.log(error.message);
}

}

  return (

      
<div className="signup-page">
  < div className='body'>
  <div className="signup">
  <h1 className="text-center">Sign up</h1>
  <form onSubmit={submitHandler}>
  <div className="form-group ">
        <label className="form-label fs-6" for="email">User name</label>
        <input className="form-control" 
        type="email"
         id="email" 
         onChange={onChangeHandler}
         value={signupform.name}
         name="name"
         required
          autoFocus 
          placeholder='Enter name....' 
          />
       
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="email">Email address</label>
        <input className="form-control" 
        type="email"
         id="email"
         name='email'
         onChange={onChangeHandler}
         value={signupform.email}
          required 
           placeholder='Enter email...' 
           />
       
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="password">Password</label>
        <input className="form-control" 
        type="password"
         id="password"
         onChange={onChangeHandler}
         value={signupform.password}
         name='password'
          required
           placeholder='Enter password...' />
     
    </div>
       <div className="form-group fs-6">
        <label className="form-label" for="password">Confirm Password</label>
        <input className="form-control" 
        type="password" 
        id="password"
        onChange={onChangeHandler}
        value={signupform.password_confirm}
        name='password_confirm'
         required
          placeholder='Confirm Password...'
           />
     
    </div>
 
    <input className="btn btn-primary w-100 " type="submit" value="REGISTER" />
    <p className='text-center fs-6 mt-3'>Already have an account? <Link className='fw-bolder' to='/login'>Login</Link></p>
</form>
</div>
</div>
</div>
  )
}

export default Signup
