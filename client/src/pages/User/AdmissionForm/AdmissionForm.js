import React from 'react'
import SideBar from '../../../components/UserSidebar/SideBar'
import './AdmissionForm.css'

function AdmissionForm() {

  return (
  <div className="d-flex">

<SideBar />
<div className='container p-0'>
<section className="intro mt-5"> 

    <div className="mask d-flex align-items-center h-100 bg-light ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{borderRadius: 1}}>
              <div className="card-body p-5">

                <h1 className="mb-5 text-center">Admission Form</h1>

                <form>
 
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label">Name</label>
                        <input type="text" id="form6Example1" className="form-control" placeholder='Enter Name...' />
                    </div>
                      </div>
                      <div className="col-12 col-md-6 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >Email</label>
                        <input type="email" id="form6Example1" className="form-control" placeholder='Enter Email...' />
                  
                      </div>
                    </div>
        
                  
       
                  </div>
                  <div className="row mt-2">
                  <div className="col-6 col-md-4 mb-4">

<div className="form-outline">
<label className="form-label" >Boold Group</label>
  <input type="text" id="form6Example1" className="form-control"  placeholder='Blood group...'/>

</div>
</div>
<div className="col-6 col-md-4 mb-4">

<div className="form-outline">
<label className="form-label">Age</label>
<input type="number" id="form6Example1" className="form-control" placeholder='Enter age..' />

</div>
</div>
<div className="col-8 col-md-4 mb-4">
  
<div className="form-outline">
<label className="form-label" >DOB</label>
<input type="date" id="form6Example1" className="form-control" />

</div>
</div>

                  </div>
      <label className="form-label pb-2" >Gender</label>
                  <div className="form-check pb-2 ">
            
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required />
  <label className="form-check-label" >
Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required />
  <label className="form-check-label" >
Female
  </label>
</div>
                  <div className="form-outline mb-3 mt-4">    
                           <label className="form-label" >Address</label>
                    <input type="text" id="form6Example3" className="form-control" placeholder='Enter Address...' />
       
                  </div>


                  <div className="row">
                    <div className="col-12 col-md-4 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >Phone Number</label>
                        <input type="number" id="form6Example1" className="form-control" placeholder='Enter phone number...'/>
                    </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >City</label>
                        <input type="text" id="form6Example1" className="form-control" placeholder='Enter city' />
                  
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mb-4">
                      <div className="form-outline">
                      <label className="form-label" >Pin Code</label>
                        <input type="number" id="form6Example1" className="form-control" placeholder='Enter pin code...' />
                  
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

  </div>


  )
}

export default AdmissionForm
