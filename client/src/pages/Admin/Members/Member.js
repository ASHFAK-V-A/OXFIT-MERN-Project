import React from 'react'
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar'


function Member() {
  return (
    <div className='d-flex '>
<AdminSidebar />

     
<div className="container mt-5 " >
      <h2 className='text-center mt-5 pb-4 text-decoration-underline'>Member's Managment</h2>


      <table class="table mt-5">  
  <thead class="thead bg-dark text-white">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Edit</th>
      <th scope="col">Block / Unblock</th>
      <th scope="col">Delete</th>
      <th scope="col">More</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" class="rounded-circle" alt="Profile Image" style={{width:50}} /></td>
      <td>jhon</td>
      <td>jhone@gmail.com</td>

      <td>45534434</td>
      <td><button className='btn btn-primary'><i className='fa fa-edit'></i></button></td>
      <td><button className='btn btn-danger'>Block</button></td>
      <td><button className='btn btn-danger'><i className='fa fa-trash'></i></button></td>
      <td><button className='btn btn-info'><i className='fa fa-info'></i></button></td>
    </tr>

  </tbody>

</table>
    
    </div>    
    </div>

  )
}

export default Member
