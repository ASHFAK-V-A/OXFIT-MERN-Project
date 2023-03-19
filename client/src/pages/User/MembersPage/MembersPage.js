import React from 'react'
import Members from '../../../components/User/Members/Members'
import SideBar from '../../../components/User/UserSidebar/SideBar'
function MembersPage() {
  return (
    <div className='d-flex'>
     <SideBar />
     <Members />      
    </div>
  )
}

export default MembersPage
