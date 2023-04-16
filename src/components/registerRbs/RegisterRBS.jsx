import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../Firebase/Firebaseconfig';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
const RegisterRBS = () => {
    const auth = getAuth(app);
    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('')
    const handelsubmits = event => {
        // prevent page refresh
        event.preventDefault();
        setsuccess('')
        seterror('')
        // collect from data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        // validation rejex.js
        // if (!/ (?=.*[A-Z])/.test(password)) {
        //     return seterror('should contain at least one UPPER case')

        // }
        if (!/(?=.*[a-z])/.test(password)) {
            return seterror('At least one lowercase character')
        }


        else if (password.length < 6) {
            seterror("Your password must be at least 6 characters");
            return;
        }
        // create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const loggeduser = result.user;
                console.log(loggeduser);
                seterror('')
                event.target.reset();
                setsuccess('user has carefully succed')
                sendvarificationemail(result.user)

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterror(errorMessage)
                console.log(error);

            });
    }

    const sendvarificationemail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('please varify your email address')

            })
    }
    return (
        <div>
            <h2 className='text-center'>Please register</h2>
            <Form onSubmit={handelsubmits}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='mb-4 ' type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='text-danger'>{error}</p>
                <p className='text-primary'>{success}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default RegisterRBS;