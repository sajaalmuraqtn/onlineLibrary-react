import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import jwt from 'jwt-decode';

function App() {
  let [user,setUser]=useState(null);
  function saveCurrentUser() {
    let token=localStorage.getItem('userToken');
    let decoded=jwt(token);
    setUser(decoded);
  }
  


  useEffect(
  ()=>{
      if (localStorage.getItem("userToken")) {
        saveCurrentUser();
      }
    }
    ,[]
  )
  let routs= createBrowserRouter(
    [
    { path: '',element:<Layout user={user} setUser={setUser} />,children:
  [
    {index:true,element:<Home/>},
    {path:'login',element:<Login info={saveCurrentUser}/>},
    {path:'register',element:<Register/>},
    { path: '*', element: <NotFound /> }
  ]}
    ]
    );
  return (
   
     
    <div className="App">
      <RouterProvider router={routs}></RouterProvider>
    </div>
  );
}

export default App;
