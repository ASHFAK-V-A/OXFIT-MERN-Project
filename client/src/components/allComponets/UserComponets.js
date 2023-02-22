import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'
import Signup from '../../pages/User/Signup/Signup'
import React from 'react'

function UserComponets() {
  return (
    <div>
    <BrowserRouter>
<Routes>
 <Route exact  path="/login"  element={<Login/>}></Route>
 <Route  path="/signup"  element={<Signup/>}></Route>
 
</Routes>
</BrowserRouter>
    </div>
  )
}

export default UserComponets
