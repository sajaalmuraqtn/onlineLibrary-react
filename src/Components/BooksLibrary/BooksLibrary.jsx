import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../Context/DataContext';
import BookCard from '../BookCard/BookCard';
import defaultImage from '../../Assets/Image/istockphoto-1270155083-612x612.jpg'
import { ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

export default function BooksLibrary() {
  const { getBookContext } = useContext(BookContext);
  let { type, book } = useContext(BookContext);


  useEffect(() => {
    console.log(book);
    getBookContext(type)
  }, [])

  return (
    <div className='container pt-5'>
       <Helmet>
        <meta charSet="utf-8" />
        <title>onlineLibrary-Books</title>
      </Helmet>
      {book === [] ?
        <Loading /> :
<>
        <h2 >BooksLibrary - {type}</h2>
        <div className='row py-5'>
         {
            book.map(
                (ele)=>{
                    return <BookCard key={ele.id}
                    authors={ele.volumeInfo.authors} 
                    title={ele.volumeInfo.title}
                    image={ele.volumeInfo.imageLinks?.thumbnail? ele.volumeInfo.imageLinks.thumbnail:defaultImage}
                    desc={ele.volumeInfo.description?ele.volumeInfo.description:''}
                    page={ele.volumeInfo.pageCount }
                    ele={ele}
                    />
                }
            )
           } 

        </div>
        </>

      }

      < ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}
