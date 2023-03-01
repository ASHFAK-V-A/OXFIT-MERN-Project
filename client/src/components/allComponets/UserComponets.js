import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'
import Signup from '../../pages/User/Signup/Signup'
import SideBar from '../LandingPage/LandingPage'
import React from 'react'
import Home from '../../pages/User/Home/Home'

function UserComponets() {
  return (
    <div>
    <BrowserRouter>
<Routes>
<Route exact  path="/"  element={<Home/>}></Route>
 <Route exact  path="/login"  element={<Login/>}></Route>
 <Route  path="/signup"  element={<Signup/>}></Route>
 <Route  path="/home"  element={<Home/>}></Route>
 
</Routes>
</BrowserRouter>
    </div>
  )
}

export default UserComponets
