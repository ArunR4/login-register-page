const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"login"
})

app.post("/add",(req,res)=>{
    const query = "insert into `register` (`name`,`email`,`password`) values (?)";
    const values = [req.body.name,req.body.email,req.body.password];
    db.query(query,[values],(err,data)=>{
        if(err){console.log(err)}
        else{return res.json(data);}
    })
})


app.post("/login",(req,res)=>{
    const query = 'select * from `register` where `email` = ? and `password` = ?';
    const values = [req.body.email,req.body.password];
    db.query(query,[values],(err,data)=>{
        if(err){
            return res.json("error");
        }
        if(data.length > 0){
            return res.json("found");
        }
        else{
            return res.json("failed");
        }
    })
})

app.listen("5000",()=>{
    console.log("Server Running in port 5000");
})