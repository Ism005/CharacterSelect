import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const registerURL = 'http://localhost:7000/register';

const Register = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const registerUsers = async () => {
        await axios.post(registerURL, { email, password })
            .then((res) => {
                if (res.status === 201) window.location.assign('/login');
            });
    };

    return (
        <div className='container'>
            <form name='RegForm' id='inscription'>
                <h1>REGISTER</h1>
                <input className='descr' type='email' name='username' id='username' placeholder='Email'
                       onChange={(e) => {
                           setEmail(e.target.value);
                       }} /><br />
                <input className='descr' type='password' name='username' id='username' placeholder='Password'
                       onChange={(e) => {
                           setPassword(e.target.value);
                       }} /><br />
                <input type='button' value='CREATE' onClick={() => registerUsers()} />
                <Link to={'/login'}>Login</Link>
            </form>
        </div>
    );
};


export default Register;