import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import AdminSidebar from '../../../components/Admin/AdminSidebar/AdminSidebar'
import AddMember from '../../../components/Admin/AddMember/AddMember'


function AddMemberPage() {


    const navigate=useNavigate()
    const token=useSelector((state)=> state.token.token)

   useEffect(()=>{
  if(!token){
    navigate('/admin')
  }
    },[])

  return (
    <div className='d-flex'>
        <AdminSidebar />
        <AddMember />
    </div>
  )
}

export default AddMemberPage
