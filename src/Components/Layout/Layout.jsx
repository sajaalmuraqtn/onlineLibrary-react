import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({user,setUser}) {
    let navigate=useNavigate()
    function logout() {
    setUser(null);
    localStorage.removeItem("userToken");
    navigate('/login')
    }
  return (
    <>
     <Navbar user={user} logout={logout}/>
    <Outlet>
      
    </Outlet>
    
    </>
  )
}
