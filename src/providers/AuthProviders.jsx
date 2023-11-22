import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';

const auth = getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn=(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signIn,
        logout,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProviders.propTypes;
export default AuthProviders;