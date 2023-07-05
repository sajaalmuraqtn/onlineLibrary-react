import { Navigate } from 'react-router-dom'
import BooksLibrary from '../BooksLibrary/BooksLibrary'
import MyList from '../MyList/MyList'
import AboutBook from '../AboutBook/AboutBook'

export default function ProtectedRouter({children}) {
  if (localStorage.getItem('userToken')) {
    return <>
    {children}
    </>
  } else {
   return <Navigate to='/login'></Navigate>
  }
}
