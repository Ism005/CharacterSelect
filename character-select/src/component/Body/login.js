import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const userURL = 'http://localhost:7000/login';

const Login = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUsers = async () => {
        await axios.post(userURL, {email, password})
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.data);
                    setUser(res.data)
                    localStorage.setItem("accessToken", res.data.authTokens[0].authToken);
                    localStorage.setItem("name", res.data);
                    window.location.assign("/home");
                }
            })
    }

    return (
        <div>
            <div className="container">
                <form name="RegForm" id="inscription">
                    <h1>LOGIN</h1>
                    <input className='descr' type="email" name="email" id="email" placeholder="Email" onChange={(e) => {
                        setEmail(e.target.value)
                    }}/><br/>
                    <input className='descr' type="password" name="username" id="username" placeholder="Password"
                           onChange={(e) => {
                               setPassword(e.target.value)
                           }}/><br/>
                    <button type="button" onClick={() => loginUsers()}>
                        LOGIN
                    </button>
                    <Link to={"/"}>Register</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;