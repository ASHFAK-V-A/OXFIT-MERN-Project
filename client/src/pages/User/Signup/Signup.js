import React from 'react'
import  './Signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  return (

      
<div className="signup-page">
  < div className='body'>
  <div className="signup">
  <h1 className="text-center">Sign up</h1>
  <form >
  <div className="form-group ">
        <label className="form-label fs-6" for="email">User name</label>
        <input className="form-control" type="email" id="email" required autoFocus placeholder='Enter name....' />
       
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="email">Email address</label>
        <input className="form-control" type="email" id="email" required  placeholder='Enter email...' />
       
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="password">Password</label>
        <input className="form-control" type="password" id="password" required placeholder='Enter password...' />
     
    </div>
       <div className="form-group fs-6">
        <label className="form-label" for="password">Confirm Password</label>
        <input className="form-control" type="password" id="password" required placeholder='Confirm Password...' />
     
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
