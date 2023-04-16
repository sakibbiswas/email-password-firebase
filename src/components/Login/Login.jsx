import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import app from '../Firebase/Firebaseconfig';

const Login = () => {
    const auth = getAuth(app)
    signInWithEmailAndPassword(auth)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    return (
        <div>
            <h2>this is login</h2>
        </div>
    );
};

export default Login;