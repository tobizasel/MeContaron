import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, initializeUser);
        return unsuscribe;
    }, [])

    const initializeUser = async (user) => {
        if (user) {
            setCurrentUser({...user})
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(true);
    }

    const value = {
        currentUser, userLoggedIn, loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}