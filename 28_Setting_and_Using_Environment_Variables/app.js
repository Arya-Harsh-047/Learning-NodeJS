// setting environment Variables directly in child process Instead of Parent process 
/* To add/create variable that are not in parent process but in child process type Command
            Variable name = "value " node --inspect app.js
*/
const environmentVariables = process.env;

setInterval(()=>{
    // console.log(process);
    console.log(environmentVariables);
    console.log('environmentVariables');
},1000)





// How to print environment variable in bash via node JS
/*
const {exec}=require('child_process');
exec(`powershell -Command "setx My_Name 'Node JS' /M"`);
*/
