import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar';
import { List, MagnifyingGlass } from "phosphor-react";
import '../Navbar/NavBarStyle.css'
import { BookContext } from '../Context/DataContext';

export default function Navbar({user,setUser,logout}) {
  let {setType}=useContext(BookContext);
  const {getBookContext}=useContext(BookContext);
let navigate=useNavigate();

  return (
    <>
    {
       user?
    <>
<div className="header container">

  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <List size={24} weight="bold" />
  </button>
      <div className="types">
        <span className="type" onClick={() =>{
          setType('all')
          getBookContext('all')  
          navigate('/bookslibrary')} }> All   </span>

        <span className="type" onClick={() =>{
          setType('books')
          getBookContext('books')
          navigate('/bookslibrary')}}  >
          Books
        </span>
        <span className="type" onClick={() =>{ 
          setType('magazines')
          getBookContext('magazines')
          navigate('/bookslibrary')}}>
          Magazines
        </span>
      </div>
     
    </div>


<Sidebar setUser={setUser} logout={logout}/>

</>
:''
}
</>  )
}
