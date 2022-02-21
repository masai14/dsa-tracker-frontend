import { createContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext({ isLoggedIn: "", userId: "", handleUserId: () => { }})

export function AuthContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userIdFromLS = localStorage.getItem("userId") || "";
    const [userId, setUserId] = useState(userIdFromLS);
    
    useEffect(() => {
        if (userIdFromLS !== "") { 
        setIsLoggedIn(true);
    }
     }, [])
    

    const handleUserId = () => { 
        const userIdFromLS = localStorage.getItem("userId") || "";
        setUserId(userIdFromLS);
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider value={{ isLoggedIn, userId, handleUserId }}>
        {children}
    </AuthContext.Provider>
}