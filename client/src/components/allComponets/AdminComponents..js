import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminDashboard from '../../pages/Admin/Dashboard/AdminDashboard'
import Member from '../../pages/Admin/Members/Member'
import Vistors from '../../pages/Admin/Vistors/Vistors'
import AdminLogin from '../../pages/Admin/Login/Login'

function AdminComponents() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
 <Route extact  path="/admin"  element={<AdminLogin/>}></Route>

<Route path='/adminhome' element={<AdminDashboard />} />
 <Route   path="/members"  element={<Member/>}></Route>

<Route path='/users' element={<Vistors/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AdminComponents
