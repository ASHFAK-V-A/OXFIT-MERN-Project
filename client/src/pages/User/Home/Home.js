import React from 'react'
import { useNavigate } from 'react-router'
import Home from '../../../components/User/Home/Home'
import SideBar from '../../../components/User/UserSidebar/SideBar'
import { useEffect } from 'react'


 function UserHome() {


 const navigate = useNavigate()


  useEffect(()=>{

  const isAuth=  sessionStorage.getItem('token')

  if(!isAuth){

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
