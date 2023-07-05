import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useContext, useEffect, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
import MyList from './Components/MyList/MyList';
import { DataContextProvider } from './Components/Context/DataContext';
import BooksLibrary from './Components/BooksLibrary/BooksLibrary';
import AboutBook from './Components/AboutBook/AboutBook';
import jwtDecode from 'jwt-decode';

function App() {

  // let { setUser } = useContext(AuthContext);
  let [user, setUser] = useState(null);

  function saveCurrentUser() {
    console.log('hi save ');
    let token = localStorage.getItem('userToken');
    let decoded = jwtDecode(token);
    setUser(decoded);
}

  useEffect(
    () => {
      if (localStorage.getItem("userToken")) {
        saveCurrentUser();
      }
    }
    , []
  );
  let routs = createBrowserRouter(
    [
      {
        path: '', element:<Layout user={user} setUser={setUser} /> , children:
          [
            { index: true, element:<Home user={user}  /> },
            { path: 'login', element: <Login saveCurrentUser={saveCurrentUser} /> },
            { path: 'register', element: <Register /> },
            { path: 'mylist', element: <MyList /> },
            { path: 'bookslibrary', element: <BooksLibrary /> },
            { path: 'aboutBook', element: <AboutBook /> },
            { path: '*', element: <NotFound /> }
          ]
      }
    ]
  );

  return (


    <div className="App">
      <DataContextProvider>
        <RouterProvider router={routs}>
        

        </RouterProvider>
      </DataContextProvider>


    </div>
  );
}

export default App;
