import React from "react";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider)
    //result.user
    return result
}

export const singOut = () => {
    return auth.signOut();
}