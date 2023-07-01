import axios from "axios";
import { createContext, useState } from "react";
import { json } from "react-router-dom";
import { toast } from "react-toastify";

export const BookContext=createContext([]);

export function DataContextProvider({children}){

let [book,setBook]=useState([]);
let [type,setType]=useState('all');
let [aboutBook,setAboutBook]=useState({title:``,image:``,desc:``,page:0,authors:``});

function getMyLibrary() {
  const userLibrary = localStorage.getItem("my-library");
  return JSON.parse( userLibrary) || [];
};
const [myLibrary, setMyLibrary] = useState(getMyLibrary());


  function deleteFromList(index) {
    setMyLibrary(myLibrary.filter((_, i) => i !== index));
    localStorage.setItem('my-library', JSON.stringify(myLibrary));
    getMyLibrary();
    toast.success('deleted successfully !', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  


async function getBookContext(type){
   try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=corona&printType=${type}&key=AIzaSyCGljOT74A5ZdUEAkSITVuqA1xe4K3r6nA` );
        setBook (response.data.items);
      } catch (error) {
        console.error(error);
      }

}



return <BookContext.Provider value={{setType,getBookContext,type,book,aboutBook,setAboutBook,deleteFromList,myLibrary,setMyLibrary}}>
    {children}
</BookContext.Provider>

}