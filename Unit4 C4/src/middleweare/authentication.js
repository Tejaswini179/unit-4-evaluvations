

const dotenv = require("dotenv").config();

const jwt = require("jsonwebtoken");

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>[
        jwt.verify(token, process.env.SECRAT_KEY,(err,decode)=>{
            if(err)return reject(err)
            return resolve(decode)
        })
    ])
}


