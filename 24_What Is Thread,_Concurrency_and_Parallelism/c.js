console.time();

for(let i=0; i < 10000000000; i++){
    if(i % 200000000 == 0){
        console.log(`Running loop 3 in c ${i}`)
    }
}

console.timeEnd();