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
import { useContext, useEffect } from 'react';
import NotFound from './Components/NotFound/NotFound';
import { AuthContext, AuthenticationProvider } from './Components/Context/AuthenticationContext';
import MyList from './Components/MyList/MyList';
import { DataContextProvider } from './Components/Context/DataContext';
import BooksLibrary from './Components/BooksLibrary/BooksLibrary';
import AboutBook from './Components/AboutBook/AboutBook';

function App() {

  const { saveCurrentUser } = useContext(AuthContext);

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
        path: '', element:<AuthenticationProvider><Layout /></AuthenticationProvider> , children:
          [
            { index: true, element: <AuthenticationProvider><Home /></AuthenticationProvider> },
            { path: 'login', element: <AuthenticationProvider><Login /> </AuthenticationProvider>},
            { path: 'register', element: <AuthenticationProvider><Register /></AuthenticationProvider> },
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
