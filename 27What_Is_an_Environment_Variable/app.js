// const {Worker}= require("worker_threads");

// new Worker("./a");
// new Worker("./b");
// new Worker("./c");

const environmentVariables = process.env;
// console.log(process);
console.log(environmentVariables);





/*

Summary of Types:
Type	Scope	Examples
System Variables	Global to all users and processes	PATH, HOME, SHELL, LANG
User Variables	Specific to a user	USER, USERPROFILE, EDITOR, HISTSIZE
Process/Session Variables	Specific to a process	PWD, PS1, TERM, SESSION_ID
Shell Variables	Specific to shell session	PS1, HISTFILE, SHELL, PWD
Application-Specific Variables	Specific to applications	JAVA_HOME, NODE_ENV, DATABASE_URL, API_KEY
Windows System Variables	Specific to Windows OS	COMPUTERNAME, ProgramFiles, APPDATA
Development/Deployment Variables	Specific to dev and deployment	NODE_ENV, AWS_ACCESS_KEY_ID, DATABASE_URL, CI
Temporary Variables	Temporary for session	TMPDIR, SESSION_ID, TEMP

*/