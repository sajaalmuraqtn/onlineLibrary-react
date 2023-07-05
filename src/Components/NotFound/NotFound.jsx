import React from 'react'
import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>
       <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
    <div className='d-flex justify-content-center'>
      <img style={{height:'86.5vh' ,width:'100vh'}} src="https://img.lovepik.com/58pic/32/49/27/85b58PIC2y5MVp0DtD065_PIC2018.png" alt="not found" />
    </div>
    </>
  )
}
