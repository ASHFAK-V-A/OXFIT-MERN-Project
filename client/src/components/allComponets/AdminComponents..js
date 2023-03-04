import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminDashboard from '../../pages/Admin/Dashboard/AdminDashboard'
import Members from '../../pages/Admin/Members/Member'
import AddMember from '../../pages/Admin/AddMember/AddMember'
import AdminLogin from '../../pages/Admin/Login/Login'

function AdminComponents() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
 <Route extact  path="/admin"  element={<AdminLogin/>}></Route>

<Route path='/dashboard' element={<AdminDashboard />} />

 <Route   path="/addmember"  element={<AddMember/>}></Route>

<Route path='/members' element={<Members />}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AdminComponents
