import React from 'react'

import AdminSidebar from '../../../components/Admin/AdminSidebar/AdminSidebar'
import AddMember from '../../../components/Admin/AddMember/AddMember'


function AddMemberPage() {

  return (
    <div className='d-flex'>
        <AdminSidebar />
        <AddMember />
    </div>
  )
}

export default AddMemberPage
