import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'

import React from 'react'
import Home from '../../pages/User/Home/Home'
import AdmissionPage from '../../pages/User/AdmssionPage/AdmssionPage'



function UserComponets() {
  return (
    <div>


<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home/>}/>

<Route path='/login' element={<Login/>} />
 
 <Route path='/admission' element={<AdmissionPage/>} />


</Routes>


</BrowserRouter>

    </div>
  )
}

export default UserComponets
