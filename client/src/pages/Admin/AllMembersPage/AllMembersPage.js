import React from 'react'
import AdminSidebar from '../../../components/Admin/AdminSidebar/AdminSidebar'
import { useEffect } from 'react'
import Member from '../../../components/Admin/Members/Member'

function AllMembersPage() {





  return (
    <div className='d-flex'>
      
      <AdminSidebar />
      <Member />

    </div>
  )
}

export default AllMembersPage
