import React from 'react'
import logo from '../../Assets/Image/istockphoto-1270155083-612x612.jpg'
import { Link, useNavigate } from 'react-router-dom'
import '../Sidebar/SidebarStyle.css'
import {
    HouseSimple,
    List,
    Heart,
    Book,
    Gear,
    SignOut,
    Question,
} from "phosphor-react";
import { useContext } from 'react';
import { BookContext } from '../Context/DataContext';

export default function Sidebar({logout}) {
  let {setType}=useContext(BookContext)

    return (
        <>
            <div className="offcanvas offcanvas-start sidebar d-flex align-items-center flex-column justify-content-start" style={{ width: '40vh' }} tabIndex={-5} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <img src={logo}  style={{ borderRadius: '100px', marginTop: '70px' }} alt="logo" width='100px' height='100px' />

               
                <Link to=" "   className="icon mt-5" >

                    <span>
                        <HouseSimple size={24} weight="bold" />
                    </span>
                    <span>Home</span>
                </Link>
                <Link to='bookslibrary' onClick={()=>setType('all')} className="icon">
                    <span>
                        <Book size={24} weight="bold" />
                    </span>
                    <span>Books Library</span>
                </Link>
                <Link to='mylist' className="icon">
                    <span>
                        <List size={24} weight="bold" />
                    </span>
                    <span>MyList</span>
                </Link>
                <Link className="icon">
                    <span>
                        <Heart size={24} weight="bold" />
                    </span>
                    <span>Favorites</span>
                </Link>
                <hr className="hrList" />
                <div className="icon">
                    <span>
                        <Gear size={24} />
                    </span>
                    <span>Setting</span>
                </div>
                <div className="icon">
                    <span>
                        <Question size={24} />
                    </span>
                    <span>Support</span>
                </div>
                <div className="icon">
                    <span onClick={()=>logout()}>
                        <SignOut size={24} />
                        <span>Logout</span>

                    </span>
                </div>
            </div></>
    )
}
