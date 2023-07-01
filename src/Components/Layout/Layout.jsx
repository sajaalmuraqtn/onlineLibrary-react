import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from '../Context/AuthenticationContext'
import AboutBook from '../AboutBook/AboutBook';
import { BookContext } from '../Context/DataContext';

export default function Layout() {
  
  return (
    <>
     <Navbar />
    <Outlet>
      
    </Outlet>
    </>
  )
}
