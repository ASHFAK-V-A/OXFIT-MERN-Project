import React from 'react'
import { useState } from 'react'
import axios from '../../../axios/axiosInstance'

import './AdmissionForm.css'

function AdmissionForm() {


const initialState={
name:'',
age:'',
bloodgrp:'',
gender:'',
address:'',
phonenumber:'',
pincode:'',
city:'',
Dob:''
}
 const [admissionForm,setAdmissionForm]=useState(initialState) 


const onchangeHandler=(e)=>{

  const {name,value} = e.target
  setAdmissionForm({...admissionForm,[name]:value})

}

const onGenderChange = (e) => {
  setAdmissionForm({ ...admissionForm, gender: e.target.value });
};


 const  onSubmitHandler= async (e)=>{
  e.preventDefault()


  await axios.post('/admission',{

    name:admissionForm.name,
    age:admissionForm.age,
    Bloodgrp:admissionForm.bloodgrp,
    gender:admissionForm.gender,
    address:admissionForm.address,
    phonenumber:admissionForm.phonenumber,
    pincode:admissionForm.pincode,
    city:admissionForm.city,
    Dob:admissionForm.Dob

     }).then((response)=>{

       console.log(response.data);

     })
    


}

console.log(admissionForm);
  return (
 
<div className='container p-0'>
<section className="intro mt-5"> 

    <div className="mask d-flex align-items-center h-100 bg-light ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{borderRadius: 1}}>
              <div className="card-body p-5">

                <h1 className="mb-5 text-center">Admission Form</h1>

                <form onSubmit={onSubmitHandler}>
 
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label">Name</label>
                        <input type="text" id="form6Example1"
                         className="form-control" 
                         name='name'
                         onChange={onchangeHandler}
                         value={admissionForm.name}
                         
                         placeholder='Enter Name...' />
                    </div>
                      </div>
                   
                      <div className="col-12 col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >Phone Number</label>
                        <input type="number"
                         id="form6Example1"
                          className="form-control"
                          name='phonenumber'
                          onChange={onchangeHandler}
                          value={admissionForm.phonenumber}
placeholder='Enter phone number...'/>
                    </div>
                      </div>
                  </div>
                  <div className="row mt-2">
                  <div className="col-6 col-md-4 mb-4">

<div className="form-outline">
<label className="form-label" >Boold Group</label>
  <input type="text" 
  id="form6Example1"
   className="form-control" 
   name='bloodgrp'
   onChange={onchangeHandler}
   value={admissionForm.bloodgrp}
placeholder='Blood group...'/>

</div>
</div>
<div className="col-6 col-md-4 mb-4">

<div className="form-outline">
<label className="form-label">Age</label>
<input type="number"
 id="form6Example1"
  className="form-control"
  name='age'
  onChange={onchangeHandler}
  value={admissionForm.age}
placeholder='Enter age..' />

</div>
</div>
<div className="col-8 col-md-4 mb-4">
  
<div className="form-outline">
<label className="form-label" >DOB</label>
<input type="date" 
id="form6Example1"
name='Dob'
onChange={onchangeHandler}
value={admissionForm.Dob}
 className="form-control" />

</div>
</div>

                  </div>
      <label className="form-label pb-2" >Gender</label>
                  <div className="form-check pb-2 ">
            
  <input className="form-check-input" type="radio" 
    name="male" 
    value='male'
    checked={admissionForm.gender === "male"} 
    onChange={onGenderChange}
   id="flexRadioDefault1" required />
  <label className="form-check-label" >
Male
  </label>


</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="female" id="flexRadioDefault2" 
  value='female'
checked={admissionForm.gender === "female"} 
onChange={onGenderChange}
     />
  <label className="form-check-label" >
Female
  </label>
</div>
                  <div className="form-outline mb-3 mt-4">    
                           <label className="form-label" >Address</label>
                    <input type="text" id="form6Example3" 
                    className="form-control"
                    name='address'
                    onChange={onchangeHandler}
                    value={admissionForm.address}
placeholder='Enter Address...' />
       
                  </div>


                  <div className="row">
          
                      <div className="col-12 col-md-4 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >City</label>
                        <input type="text" 
                        id="form6Example1" 
                        className="form-control" 
                        name='city'
                        onChange={onchangeHandler}
                        value={admissionForm.city}
placeholder='Enter city' />
                  
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >Pin Code</label>
                        <input type="number" 
                        id="form6Example1" 
                        className="form-control" 
                        name='pincode'
                        onChange={onchangeHandler}
                        value={admissionForm.pincode}
placeholder='Enter pin code...' />
                  
                      </div>
                    </div>
                  
       
                  </div>

              
               
                  <button type="submit" className="btn btn-primary btn-rounded btn-block float-end">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</section>
</div>

 


  )
}

export default AdmissionForm
