import React, { useContext } from 'react'
import library from '../../Assets/Image/libr.jpg'
import '../Login/Loginstyle.css'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
export default function Login({saveCurrentUser}) {
  let [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  let [statusError,setStatusError]=useState('');

  let schema = Yup.object(
    {
      email: Yup.string().required("email is required").email("email invalid"),
      password: Yup.string().min(10, "minimum characters is 10").max(15, "maximum characters is 15")
    }
  )

  let formik = useFormik(
    {
      initialValues: {
        email: "",
        password: ""
      }, onSubmit: sendLoginData,
      validationSchema: schema
    });

  
    async function sendLoginData(values) {

      let { data } = await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/login', values).catch((err) => {
        setStatusError(err.response.data.message);
  
      });
      if (data.message === "Done") {
        console.log(data.message);
        if (data.access_token) {
          console.log(localStorage.getItem('userToken'));
          localStorage.setItem('userToken', data.access_token);
           
        }
        setErrors([]);
        setStatusError([]);
        saveCurrentUser();
        navigate('/');
    }
    }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>onlineLibrary-Login</title>
      </Helmet>
      <div className="container row">
        <div className="col-md-6 pt-3" >
          <img src={library} alt="library" width={'100%'} />
        </div>
        <div className="col-md-6 text-start p-5 pt-5 mt-5">
          <h2>login and lets read some book</h2>
          <form className='mt-5' onSubmit={formik.handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" value={formik.values.email} onChange={formik.handleChange} name="email" className="form-control" />
              {statusError ? <p className="alert alert-danger mt-2">{statusError}</p> : ""}
              {formik.errors.email ? <p className="alert alert-danger mt-2">{formik.errors.email}</p> : ""}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" value={formik.values.password} onChange={formik.handleChange} name='password' className=' form-control' id="exampleInputPassword1" />
              {formik.errors.password ? <p className="alert alert-danger mt-2">{formik.errors.password}</p> : ""}

            </div>

           <p className='my-3'>you haven’t an account<a className='mx-2' style={{cursor:'pointer'}} onClick={()=>{navigate('/register')}}>Register</a></p>
            <button type="submit" className="btn btn-primary">Login</button>

          </form>
          
        </div>
      </div>

    </>
  )
}
