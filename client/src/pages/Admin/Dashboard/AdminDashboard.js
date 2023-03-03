import React from 'react'
import AdminSidebar from '../../../components/AdminSidebar/AdminSidebar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function AdminDashboard() {
  const token=useSelector((state)=> state.token.token)

  const navigate=useNavigate()

useEffect(()=>{
  if(token==null){
navigate('/admin')
  }

},[])

  return (
    <div className='d-flex'>
  
        <AdminSidebar />
        <h2 className='mt-5 p-5'>Dashboard come will soon !</h2>
    </div>
  )
}

export default AdminDashboard
