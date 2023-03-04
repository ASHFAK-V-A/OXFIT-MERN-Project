import React from 'react'
import { useNavigate } from 'react-router'
import Home from '../../../components/User/Home/Home'
import SideBar from '../../../components/User/UserSidebar/SideBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function UserHome() {

  const token = useSelector((state)=>state.token.token)
console.log('hers',token);
const navigate = useNavigate()

  useEffect(()=>{
if(!token){
  navigate('/login')
}

  },[])

  return (
<>

<div className="d-flex">

<SideBar />
 <Home />

    </div>  
    </>
  )
}

export default UserHome
