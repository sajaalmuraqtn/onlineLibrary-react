import React, { useContext } from 'react'
import { BookOpen } from 'phosphor-react';
import { BookContext } from '../Context/DataContext';
import { useNavigate } from 'react-router-dom';
import '../BookCard/BookCardStyle.css'
import { ToastContainer } from 'react-toastify';

export default function BookCard({ authors, title, image, desc, page,ele }) {

  let { setAboutBook, aboutBook } = useContext(BookContext);
  let {myLibrary,setMyLibrary}=useContext(BookContext);
  const addToMyList = () => {
    console.log(myLibrary);
    const addedBook = {...ele, added:true}
    setMyLibrary([...myLibrary, addedBook]);
    localStorage.setItem('my-library', JSON.stringify(myLibrary));
    navigate('/mylist');
  };
  let navigate = useNavigate();
  return (
    <div className="card col-md-2 mx-3">

      <img src={image} alt="book" />

      <span>{title}</span>
      <span>{authors}</span>
      <span className='btn btn-primary' onClick={() => {
        setAboutBook({ title: title, image: image, desc: desc, page: page, authors: authors });
        navigate('/aboutBook');
      }}>More</span>
      <div className='add-book d-flex align-items-center p-2' onClick={() => {addToMyList()}}>

        <BookOpen size={32} />
        <span> Add To List</span>
      </div>
    </div>)
}
