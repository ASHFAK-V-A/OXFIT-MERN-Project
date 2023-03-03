import React from 'react'

function Login() {
  return (
    <div>
      
<div className="image-box">
  <div className='body'>


<div className="login">
  <h1 className="text-center">Login</h1>
<form className="needs-validation" >
    <div className="form-group was-validated mt-5 mb-2">
        <label className="form-label fs-6" for="email">Email address</label>
        <input className="form-control" 
        type="email" 
        id="email" 
         autoFocus
          placeholder='Enter your email...'  style={{borderColor:'black',backgroundImage:'none'}}

          name='email' 
          required/>
           
    </div>
    <div className="form-group was-validated  mt-3 mb-2">
        <label className="form-label fs-6" >Password</label>
        <input className="form-control" 
        type="password" 
        id="password"
    name='password'

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


    </div>
  )
}

export default Login
