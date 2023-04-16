import React, { useState } from 'react';

const Register = () => {
    const [email, setemail] = useState('')

    const handelsubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value
        console.log(email, password);
    }

    const handelEmailchange = (event) => {
        // console.log(event.target.value);
        setemail(event.target.value)
    }
    const handelpasswordblur = (event) => {
        // console.log(event.target.value);
    }
    return (
        <div>
            <h3>please Register</h3>
            <form onSubmit={handelsubmit} >
                <input onChange={handelEmailchange} type="email" name="email" id="email" placeholder='Your email' />
                <br />
                <input onBlur={handelpasswordblur} type="password" name="password" id="password" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;