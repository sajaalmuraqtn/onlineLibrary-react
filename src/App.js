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
import { AuthContext, AuthenticationContextProvider } from './Components/Context/AuthenticationContext';
import MyList from './Components/MyList/MyList';
import { DataContextProvider } from './Components/Context/DataContext';
import BooksLibrary from './Components/BooksLibrary/BooksLibrary';
import AboutBook from './Components/AboutBook/AboutBook';

function App() {

  // let { saveCurrentUser } = useContext(AuthContext);

  useEffect(
    () => {
      if (localStorage.getItem("userToken")) {
        // saveCurrentUser();
      }
    }
    , []
  );
  let routs = createBrowserRouter(
    [
      {
        path: '', element: <Layout />, children:
          [
            { index: true, element: <Home /> },
            { path: 'login', element: <Login /> },
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
      <AuthenticationContextProvider>
        

      </AuthenticationContextProvider>
        </RouterProvider>
      </DataContextProvider>


    </div>
  );
}

export default App;
