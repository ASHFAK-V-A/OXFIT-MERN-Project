
import { useState } from 'react'
import axios from '../../../axios/axiosInstance'
import { Link } from 'react-router-dom'
import './AddMember.css'
import { useNavigate } from 'react-router'

function AddMember() {


  const navigate=useNavigate()

const [errors,setErrors] = useState({});

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
    await axios.post('/admin/addmember',{
      email:signupform.email,
      name:signupform.name,
      password:signupform.password,
      password_confirm:signupform.password_confirm
    }).then((response)=>{
      console.log(response.data);
      navigate('/admin')
    }).catch((error)=>{
      console.log(error);
      setErrors(error.response.data);
      
    })
    
  } catch (error) {
    console.log(error.message);
  }
  
  }  
   
    
 

  return (
   
       
              <div className="container pt-5 bg-light">
              <div className="signup-page">
  < div className='body'>
  <div className="signup">
  <h1 className="text-center">Add Member</h1>
  <form onSubmit={submitHandler}>
  <div className="form-group ">
        <label className="form-label fs-6" for="email">User name</label>
        <input className="form-control" 
        type="name"
         id="name" 
         onChange={onChangeHandler} 
         value={signupform.name}
         name="name"
          autoFocus 
          placeholder='Enter name....' 
          />
       {errors && <p className='fs-6' style={{color:"red"}}>{errors.name}</p>}
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="email">Email address</label>
        <input className="form-control" 
        type="email"
         id="email"
         name='email'
         onChange={onChangeHandler}
         value={signupform.email}

           placeholder='Enter email...' 
           />
       {errors && <p style={{color:"red"}}>{errors.email}</p>}
    </div>
    <div className="form-group fs-6">
        <label className="form-label" for="password">Password</label>
        <input className="form-control" 
        type="password"
         id="password"
         onChange={onChangeHandler} 
         value={signupform.password}
         name='password'

           placeholder='Enter password...' />
     {errors && <p style={{color:"red"}}>{errors.password}</p>}
    </div>
       <div className="form-group fs-6">
        <label className="form-label" for="password">Confirm Password</label>
        <input className="form-control" 
        type="password" 
        id="password"
        onChange={onChangeHandler}
        value={signupform.password_confirm}
        name='password_confirm'

          placeholder='Confirm Password...'
           />
     {errors && <p style={{color:"red"}}>{errors.password_confirm}</p>}
    </div>
 
    <input className="btn btn-primary w-100 " type="submit" value="REGISTER" />
 
</form>
</div>
</div>
</div>


              </div>
   
  )
}

export default AddMember
