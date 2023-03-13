import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'

import React from 'react'
import Home from '../../pages/User/Home/Home'
import AdmissionPage from '../../pages/User/AdmssionPage/AdmssionPage'
import Checkout from '../User/Checkout/Checkout'

import PlanPage from '../../pages/User/PlanPage/PlanPage'


function UserComponets() {
  return (
    <div>


<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home/>}/>

<Route path='/login' element={<Login/>} />
 
 <Route path='/admission' element={<PlanPage/>} />

<Route path='/checkout' element={<Checkout/>} ></Route>

</Routes>


</BrowserRouter>

    </div>
  )
}

export default UserComponets
