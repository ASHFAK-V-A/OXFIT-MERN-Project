import React from 'react'
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar'

function Vistors() {
  return (
    <div className='d-flex'>
        <AdminSidebar />
              <div className="container pt-5 bg-light">
                <h2 className='mt-5 pt-3 text-center text-decoration-underline'>Website Users</h2>
              <table class="table mt-5 bg-white ">
  <thead class="thead-dark ">

    <tr className='bg-dark text-white'>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Block / Unblock</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><button className='btn btn-primary'>Edit</button></td>
      <td><button className='btn btn-danger'>Block</button></td>
    </tr>


  </tbody>
</table>


              </div>
    </div>
  )
}

export default Vistors
