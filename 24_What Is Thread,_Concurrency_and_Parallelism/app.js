// const a = process;
// console.log(a);

// while(true){}

// setInterval(()=>{
//     console.log('hello')
// },100)



// if we rum 3 loop in single program/process then it take 2.436s to complete it. If we want to complete it under 1sec then we make thread of this process & divide it into 3 separate file & loop( or in worker thread)

// console.time();

// for(let i=0; i < 10000000000; i++){
//     if(i % 2000000000 == 0){
//         console.log(`Running loop 1 ${i}`)
//     }
// }

// for(let i=0; i < 10000000000; i++){
//     if(i % 2000000000 == 0){
//         console.log(`Running loop 2 ${i}`)
//     }
// }


// for(let i=0; i < 10000000000; i++){
//     if(i % 2000000000 == 0){
//         console.log(`Running loop 3 ${i}`)
//     }
// }

// console.timeEnd();






// After making 3 separate loop/threads now

const {Worker} = require("worker_threads");

new Worker("./a");
new Worker("./b");
new Worker("./c");

