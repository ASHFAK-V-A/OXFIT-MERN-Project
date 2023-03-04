import React from 'react'
import './Home.css'
import Footer from '../../../components/Footer/Footer'
import SideBar from '../../../components/UserSidebar/SideBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()
  const token=useSelector((state)=> state.token.token)

  useEffect(()=>{
 
 if(token==null){
 navigate('/login')
  }

  },[])

  return (
<>

<div className="d-flex">


<SideBar />
    <div className='bg-light'>
   

<h1 className='text-center pt-5 mt-4 fw-bolder mb-4'>OXFIT</h1>  
     <div className="container ps-3 ">

<div className='pt-5'>
<h4 className='fw-bolder'>Welcome User !</h4>
</div>

<div className="mt-5">

<div className="col-12 pt-3">
<p >ABOUT OXFIT :</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore corporis ea iure consequatur culpa corrupti voluptates reiciendis rem nulla, dolore quis vel quibusdam dolorum totam. Consequatur consequuntur rerum corrupti officiis eligendi minima vero perferendis unde excepturi facilis placeat cupiditate ipsum hic dicta quibusdam praesentium a nemo culpa nesciunt autem sunt exercitationem, debitis quas nostrum. Commodi tempore illum quis at repudiandae!</p>
</div>

</div>

<div className="row pt-5 mb-5">
<div className="col-12 col-sm-4 col-md-4">
<div className="card mb-4 ">
<div className="card-body ">
<h5 className="card-title mb-3">Members Counting</h5>

<h2 className='text-end pt-2 fw-bolder'>10</h2>
</div>
</div>
</div>
<div className="col-12 col-sm-4 col-md-4">
<div className="card  mb-4 ">
<div className="card-body">
<h5 className="card-title mb-3">Men's</h5>
<h2 className='text-end pt-2 fw-bolder'>10</h2>
</div>
</div>
</div>
<div className="col-12 col-sm-4 col-md-4">
<div className="card  mb-4 ">
<div className="card-body">
<h5 className="card-title mb-3">Women's</h5>
<h2 className='text-end pt-2 fw-bolder'>10</h2>
</div>
</div>
</div>
</div>

<hr />


<div className="Traing-section mb-5 mt-3">
<h3 className='text-center'>Trainers</h3>
</div>

<div className="row mt-5 ">
<div className="col-12  col-lg-6">
<div className="card mb-4">
<div className="card-body text-center">
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
    className="rounded-circle img-fluid" style={{width: 150}} />
  <h5 className="my-3">John Smith</h5>
  <p className="text-muted mb-1">Full Stack Developer</p>
  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
  <div className="d-flex justify-content-center mb-2">
    <button type="button" className="btn btn-primary">Follow</button>
    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
  </div>
</div>
</div>
</div>
<div className="col-12 col-lg-6 ">
<div className="card mb-4">
<div className="card-body text-center">
  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
    className="rounded-circle img-fluid" style={{width: 150}} />
  <h5 className="my-3">John Smith</h5>
  <p className="text-muted mb-1">Full Stack Developer</p>
  <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
  <div className="d-flex justify-content-center mb-2">
    <button type="button" className="btn btn-primary">Follow</button>
    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
  </div>
</div>
</div>
</div>
</div>
</div>
  <Footer />
    </div>

    </div>  
    </>
  )
}

export default Home
