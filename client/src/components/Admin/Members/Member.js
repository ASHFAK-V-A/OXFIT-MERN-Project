import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../../axios/axiosInstance'



function Member() { 
 
const [allMembers,setAllmembers]=useState([])
  
  useEffect(()=>{
    axios.get('/admin/members').then((memberdata)=>{
       setAllmembers(memberdata.data.members)
    })


  },[])




  
  return (
    
    
     
<div className="container mt-5 " >
      <h2 className='text-center mt-5 pb-4 text-decoration-underline'>Members Managment</h2>


      <table className="table mt-5">  
  <thead className="thead bg-dark text-white">
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

  {allMembers.map((membe)=>(

    
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src="https://t4.ftcdn.net/jpg/01/18/03/33/240_F_118033377_JKQA3UFE4joJ1k67dNoSmmoG4EsQf9Ho.jpg" class="rounded-circle" alt="Profile Image" style={{width:50}} /></td>
      <td>{membe.name}</td>
      <td>{membe.email}</td>

      <td>45534434</td>
      <td><button className='btn btn-primary'><i className='fa fa-edit'></i></button></td>
      <td><button className='btn btn-danger'>Block</button></td>
      <td><button className='btn btn-danger'><i className='fa fa-trash'></i></button></td>
      <td><button className='btn btn-info'><i className='fa fa-info'></i></button></td>
    </tr>

  </tbody>

))}
</table>
    
    </div>    


)

}

export default Member
