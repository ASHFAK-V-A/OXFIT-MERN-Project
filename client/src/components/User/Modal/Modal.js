import React from 'react'
import { useEffect,useState } from 'react'
import { Modal, Form, Button } from "react-bootstrap";
import './Modal.css'

function Modalshow() {
  return (
   
<>

<div>
      <section className="modal-main">  
       <h2 className='text-center pt-4'> Edit User</h2>
   <div className="container p-3">      
   <form>
  <div class="row">
    <div class="col-12 col-md-6 mb-3">
      <input type="text" class="form-control" placeholder="Name" autoFocus />
    </div>
    <div class="col  col-md-6">
      <input type="text" class="form-control" placeholder="Phone" />
    </div>
    
  </div>
  <div class="row pt-3">
    <div class="col-12 mb-3">
      <input type="text" class="form-control" placeholder="Address" />
    </div>
    <div class="col-6">
      <input type="number" class="form-control" placeholder="Age" />
    </div>
    <div class="col-6">
      <input type="number" class="form-control" placeholder="Blood Group" />
    </div>
    

  </div>
  <div class="row pt-3">
    <div class="col-6 mb-3">
      <input type="date" class="form-control" placeholder="Address" />
    </div>
    <div class="col-6">
      <input type="number" class="form-control" placeholder="City" />
    </div>
    

  </div>
  <div class="row pt-3">
    <div class="col-6 mb-3">
      <input type="text" class="form-control" placeholder="State" />
    </div>
    <div class="col-6">
      <input type="number" class="form-control" placeholder="Pin Code" />
    </div>
  </div>

<div className="col-12 d-flex justify-content-end pt-3">
  <button className='btn btn-danger me-2'>Close</button>
  <button className='btn btn-primary me-4'>Submit</button>

</div>



</form>

  </div>
      </section>
    </div>

</>       


  )
}

export default Modalshow



