import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext ,GoogleAuthProvider} from 'react-router-dom'

export const AuthContext= createContext(null);
const googleProvider =new GoogleAuthProvider();

function Authprovider({children}) {
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
    user,
    loading
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authprovider