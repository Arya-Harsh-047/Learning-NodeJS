
const environmentVariables = process.env;

setInterval(()=>{
    // console.log(process);
    console.log(environmentVariables);
},1000)





// How to print environment variable in bash via node JS
/*
const {exec}=require('child_process');
exec(`powershell -Command "setx My_Name 'Node JS' /M"`);
*/
