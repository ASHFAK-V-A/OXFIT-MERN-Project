import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'
import Signup from '../../pages/User/Signup/Signup'
import React from 'react'
import Home from '../../pages/User/Home/Home'
import AdmissionForm from '../../pages/User/AdmissionForm/AdmissionForm'
import SideBar from '../UserSidebar/SideBar'

function UserComponets() {
  return (
    <div>


<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home/>}/>
 
 <Route path='/admission' element={<AdmissionForm/>} />

</Routes>


</BrowserRouter>

    </div>
  )
}

export default UserComponets
