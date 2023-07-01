import React, { useContext, useState } from 'react';
import { BookContext } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../Assets/Image/istockphoto-1270155083-612x612.jpg'
import '../MyList/MyListStyle.css';
import { ToastContainer } from 'react-toastify';

export default function MyList() {
  const { setAboutBook, deleteFromList ,myLibrary} = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h2>My List</h2>
      <div className="row">
        {myLibrary.map((item, index) => (
          <div className="card col-md-2 mx-3" key={index} >
            <img src={item.volumeInfo.imageLinks?.thumbnail?
            item.volumeInfo.imageLinks.thumbnail:
            defaultImage
            } alt="book" />
            <span>{item.volumeInfo.title}</span>
            <span>{item.volumeInfo.authors }</span>
            <span className='btn btn-primary' onClick={() => {
            setAboutBook({ title: item.volumeInfo.title, image:item.volumeInfo.imageLinks.thumbnail, desc: item.volumeInfo.description, page: item.volumeInfo.pageCount, authors: item.volumeInfo.authors });
            navigate('/aboutBook');
          }}>More</span>
            <button className='btn btn-danger' onClick={() => {
              deleteFromList(index);
              navigate('/mylist');
            }}>X</button>
          </div>
        ))}
      </div>
      < ToastContainer
        position = "top-right"
        autoClose = { 5000}
        hideProgressBar = { false}
        newestOnTop = { false}
        closeOnClick
        rtl = { false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme = "dark"
          />
    </div>
  );
}