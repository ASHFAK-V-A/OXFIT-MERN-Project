import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminDashboardPage from '../../pages/Admin/AdminDashboardPage/AdminDashboardPage'
import AllMembersPage from '../../pages/Admin/AllMembersPage/AllMembersPage'
import AdminLogin from '../Admin/Login/Login'
import AddMemberPage from '../../pages/Admin/AddMemberPage/AddMemberPage'
import PlanListPage from '../../pages/Admin/PlanListPage/PlanListPage'


function AdminComponents() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
 <Route extact  path="/admin"  element={<AdminLogin/>}></Route>

<Route path='/dashboard' element={<AdminDashboardPage />} />

<Route path='/addmember' element={<AddMemberPage /> } />

<Route path='/members' element={<AllMembersPage />}></Route>

<Route path='/plans' element={<PlanListPage />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AdminComponents
