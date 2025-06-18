import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // setLoading(false);

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