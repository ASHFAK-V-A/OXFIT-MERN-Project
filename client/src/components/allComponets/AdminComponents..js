import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import AdminDashboard from '../../pages/Admin/Dashboard/AdminDashboard'


function AdminComponents() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        
 <Route extact  path="/admin"  element={<AdminDashboard/>}></Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default AdminComponents
