import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (

<div className="image-box">
  <div className='body'>


<div className="login">
  <h1 className="text-center">Login</h1>
<form className="needs-validation">
    <div className="form-group was-validated mt-5 mb-2">
        <label className="form-label fs-6" for="email">Email address</label>
        <input className="form-control" type="email" id="email" required autoFocus placeholder='Enter your email...' />
        <div className="invalid-feedback">
            Please enter your email address
        </div>
    </div>
    <div className="form-group was-validated mt-3 mb-2">
        <label className="form-label fs-6" for="password">Password</label>
        <input className="form-control" type="password" id="password" required placeholder='Enter your password...' />
        <div className="invalid-feedback">
            Please enter your password
        </div>
    </div>
    <div className="form-group ">
        <span className='float-end fs-6'>Forgot password</span>
    </div>
    <input className="btn btn-primary w-100 mt-4  " type="submit" value="Log in" />
     <p className='text-center fs-6 mt-3'>Don't have an account? <Link className='fw-bolder' to='/signup'>Sign up</Link></p>
</form>


</div>
</div>

</div> 


  )
}

export default Login
