import React, { useContext } from 'react'
import library from '../../Assets/Image/libr.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Home({user}) {
  return (
    <div className=' container row ' style={{height:'80vh'}}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>onlineLibrary-home</title>
      </Helmet>
       
        <img src={library} alt="library" className='col-md-6' />
       <div className='col-md-6 d-flex align-items-center justify-content-center flex-column'>
         <h1 >welcome to our online library</h1>
         {!user?
         <>
         <p>you have an acount<Link className='mx-3' to='login'>Login</Link></p>
         <p>you haven’t an acount<Link className='mx-3' to='register'>Register</Link></p>
         </>
        : '' 
        }
         
        </div>

    </div>
  )
}
