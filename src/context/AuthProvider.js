import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email & password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in with google 
    const signInWithGoogle = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider);
    };

    // sign in with Github
    const signInWithGithub = (Provider) => {
        setLoading(true)
        return signInWithPopup(auth, Provider);
    };

    // update user profile
    const updateUser = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, name, photo);
    };


    //logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    };

    // user observation
    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubsribe()
    }, [])

    const authInfo = {
        createUser,
        signInWithGoogle,
        signInWithGithub,
        updateUser,
        logOut,
        user,
        loading,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;