import React,{ createContext, useState } from "react";
import jwt from 'jwt-decode';
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext([]);

export function AuthenticationContextProvider({ children }) {
    
    let navigate = useNavigate();


    //login section
    let [user, setUser] = useState(null);

    function saveCurrentUser() {
        console.log('hi save ');
        let token = localStorage.getItem('userToken');
        let decoded = jwt(token);
        setUser(decoded);

    }


    function logoutContext() {
        alert('hi');
        setUser(null);
        localStorage.removeItem("userToken");
        navigate('/login')
    }
    //login section

    return     <AuthContext.Provider value={{ user, setUser, saveCurrentUser, logoutContext }}>
    {children}
  </AuthContext.Provider>


}