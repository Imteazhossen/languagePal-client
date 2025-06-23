import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
          if ( currentUser?.email){
            const userData = { email: currentUser.email};
            axios.post('http://localhost:3000/jwt', userData)
            .then(res => {
                console.log('token after jwt', res.data);
            })
            .catch(error => console.log(error))
          }
          console.log('user in the auth state change', currentUser);

        });
        return () => {
            unSubscribe();
        };

    }, []);




    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {

                console.log(result);
            }).catch((error) => {
                console.log(error);
            });

    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }
    const userInfo = {
         user,
        logOut,
        setUser,
        createUser,
        signInUser,
        googleSignIn,
        updateUser,
        signIn,

    }
    return (

        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;