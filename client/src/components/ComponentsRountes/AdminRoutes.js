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
  
 <Route path="/admin"  element={<AdminLogin/>}></Route>

<Route  path='/admin/dashboard' element={<AdminDashboardPage />} />

<Route exact path='/admin/addmember' element={<AddMemberPage /> } />

<Route path='/admin/members' element={<AllMembersPage />}></Route>

<Route path='/admin/plans' element={<PlanListPage />}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AdminComponents
