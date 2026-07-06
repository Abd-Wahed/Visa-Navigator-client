import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';


export const AuthContext= createContext(null);
const googleProvider =new GoogleAuthProvider();

function AuthProvider({children}) {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

  const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

  const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

  const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
      })
      return ()=>unsubscribe();
    },[])

  const authInfo ={
    createUser,
    loginUser,
    loginWithGoogle,
    logoutUser,
    GoogleAuthProvider,
    user,
    loading
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;