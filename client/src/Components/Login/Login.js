import React, { useState } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

import '../../Form.css';

const Login = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const inputHandler = e => {
        e.preventDefault();
        setValues(pre => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = () => {
        const value = {
            email:values.email,
            password:values.passwords
        }

        axios.post("http://localhost:5000/login",value).then(res=>{
            if(res.data === "found"){
                navigate('/home');
            }
            else{
                alert("No Record Found !!");
            }
        }).catch(err=>{})

    }

    return (
        <div className="container">
            <input type="email" value={values.email} placeholder="Enter your mail" name='email' onChange={inputHandler}/>
            <input type="text" value={values.password} placeholder="Enter your password" name='password' onChange={inputHandler} />
            <button onClick={submitHandler} >Log in</button>
            <div>
                <p>If you don't hava an account </p>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default Login;