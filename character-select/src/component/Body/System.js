import React, { useState } from 'react';
import axios from 'axios';
import Body from './body';

const champcURL = 'http://localhost:7000/champ/create';
const userURL = 'http://localhost:7000/create';
//const champURL  = 'http://localhost:7000/champ';

const System = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [champ, setChamp] = useState(null);
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const createChamp = async () => {
        await axios.post(champcURL, { name, description })
            .then((res) => {
                setChamp(res.data);
                console.log(res.data.description);
            });

        /*await axios.get(champURL)
            .then((res) => console.log(res.data))
             await axios.post(champcURL, {name, description})
        .then(( res ) => {
            setChamp(res.data)
            console.log(res.data.description);*/
    };

    const createUsers = async () => {
        await axios.post(userURL, { email, password })
            .then((res) => {
                setUser(res.data);
                console.log(res.data.email);
            });
    };

    return (
        <div className='container'>
            <form name='RegForm' id='inscription'>
                <p>CHARACTER SELECT</p>
                <input type='email' name='username' id='username' placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value);
                }} /><br />
                <input className='descr' type='password' name='username' id='username' placeholder='Password'
                       onChange={(e) => {
                           setPassword(e.target.value);
                       }} /><br />
                <input className='descr' type='text' name='username' id='username' placeholder='Test' onChange={(e) => {
                    alert(e.target.value);
                }} /><br />
                <input type='button' value='CREATE' onClick={() => createChamp()} />
            </form>
        </div>
    );
};


export default System;