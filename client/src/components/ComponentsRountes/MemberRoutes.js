import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../../pages/User/Login/Login'
import React from 'react'
import Home from '../../pages/User/Home/Home'
import Checkout from '../User/Checkout/Checkout'
import PlanPage from '../../pages/User/PlanPage/PlanPage'
import AdmissionForm from '../User/AdmissionForm/AdmissionForm'
import MembersPage from '../../pages/User/MembersPage/MembersPage'


function UserComponets() {
  return (
    <div>


<BrowserRouter>
<Routes>

<Route exact path='/' element={<Home/>}/>

<Route path='/login' element={<Login/>} />
 
 <Route path='/admission' element={<PlanPage/>} />

 <Route path='/admissionform/:id' element={<AdmissionForm />}></Route>

<Route path='/checkout/:id' element={<Checkout/>} ></Route>

<Route path='/members' element={<MembersPage/>}></Route>

</Routes>


</BrowserRouter>

    </div>
  )
}

export default UserComponets
