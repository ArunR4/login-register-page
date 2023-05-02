import React,{ useState } from "react";
import axios from 'axios';

import '../../Form.css';

const Register = () => {
    const [values, setValues] = useState({
        name:"",
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

    const submitHandler = () =>{
        let value={
            name:values.name,
            email:values.email,
            password:values.password
        }
        axios.post("http://localhost:5000/add",value).then(res=>{
            alert("Data Inserted");
        }).catch(err=>{
            alert("Something went Wrong !!");
        })
    }

    return (
        <div className="container">
            <input type="text" value={values.name} placeholder="Enter your name" name='name' onChange={inputHandler}/>
            <input type="email" value={values.email} placeholder="Enter your mail" name='email' onChange={inputHandler}/>
            <input type="text" value={values.password} placeholder="Enter your password" name='password' onChange={inputHandler} />
            <button onClick={submitHandler} >Register</button>
        </div>
    );
}

export default Register;