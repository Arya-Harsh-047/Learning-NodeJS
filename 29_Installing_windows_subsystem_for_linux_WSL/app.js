// How to use process.env in production projects

const fs = require("fs");

const fileData = fs.readFileSync("./.env").toString();

fileData.split("/\r?\n/").forEach((variable)=>{
    const[key,value]= variable.split("=");
    process.env[key]=value;
});

setInterval(()=>{
   const a = process.env;
    console.log('Hii');
},1000)