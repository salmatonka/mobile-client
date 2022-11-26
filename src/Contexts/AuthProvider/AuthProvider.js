import React, { useEffect, useState } from 'react';
import {createContext} from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config'


   export const AuthContext = createContext();
   const auth = getAuth(app);



const AuthProvider = ({children}) =>{
    const provider = new GoogleAuthProvider()

    const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true);


     const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
     }
     
     const updateName = (name)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName:name})
      }


     const login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }

      const handleGoogleAdd = () =>{
        // console.log('google handle')
        setLoading(true)
       return signInWithPopup(auth,provider)
        
        
      }
      

      const logOut=() =>{
        setLoading(true)
          return signOut(auth)
      }


     useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return () =>{
            unsubscribe();
        }
     },[])



    const authInfo = {
          user,
          loading,
          createUser,
          login,
          logOut,
          updateName,
          handleGoogleAdd,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;