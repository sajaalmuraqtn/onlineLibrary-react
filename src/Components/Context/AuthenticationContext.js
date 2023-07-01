import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext([]);

export function AuthenticationProvider({children}){
    let navigate = useNavigate();


    //login section
    let [user, setUser] = useState(null);

    function saveCurrentUser() {
        console.log('hi save ');
        let token = localStorage.getItem('userToken');
        let decoded = jwtDecode(token);
        setUser(decoded);
    }


    function logoutContext() {
        alert('hi');
        setUser(null);
        localStorage.removeItem("userToken");
        navigate('/login')
    }
    //login section



return <AuthContext.Provider value={{user, setUser, saveCurrentUser, logoutContext}}>
    {children}
</AuthContext.Provider>

}