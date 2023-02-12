// step - 1

import {GoogleAuthProvider, getAuth,signInWithPopup,  signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { useEffect, useState } from "react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// getStorage lets firebase know that the storage is being used in this project
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPGuKde-7AzIu7BKhNTmoj3f9CxoRazls",
  authDomain: "file-upload-45c2d.firebaseapp.com",
  projectId: "file-upload-45c2d",
  storageBucket: "file-upload-45c2d.appspot.com",
  messagingSenderId: "192548088732",
  appId: "1:192548088732:web:fd425422f8cef5dcae3659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// do mention this 
export const storage = getStorage(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// functions
// signup
export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}

// login
export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}

// logout
export function logout(){
    return signOut(auth);
}

// checking user presence
export function useAuth(){
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsign = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        })
    }, [])
    return currentUser;
}

// all done here


// google - googleAuthProvider, signInWithPopUp
export const goog = new GoogleAuthProvider();
export const signGoog = () => {
    signInWithPopup(auth, goog).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
}


// realtime database for form