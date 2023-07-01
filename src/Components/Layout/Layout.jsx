import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { AuthContext } from '../Context/AuthenticationContext'
import AboutBook from '../AboutBook/AboutBook';
import { BookContext } from '../Context/DataContext';

export default function Layout() {
  let {user,setUser}=useContext(AuthContext);
  let {setAboutBook}=useContext(BookContext);
  let {aboutBook,nullAbout}=useContext(BookContext);
  useEffect(()=>{
    localStorage.setItem('hi','hi');
  })
  return (
    <>
     <Navbar />
    <Outlet>
      
    </Outlet>
    </>
  )
}
