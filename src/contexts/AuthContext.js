import React, { useContext, useEffect, useState } from "react";
import { auth,  } from "../firebase/firebaseConfig";
// import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);


    // const signUp = (email, password) =>{
    //     return createUserWithEmailAndPassword(auth, email, password)
    // }

    const logIn = (email, password) =>{
        return auth.signInWithEmailAndPassword(email, password)
    }


    useEffect(()=>{
       const unsubscribe =  auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
        setLoading(false)
        })
        unsubscribe()
    },[])


    const value ={
        currentUser,
        logIn,
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
