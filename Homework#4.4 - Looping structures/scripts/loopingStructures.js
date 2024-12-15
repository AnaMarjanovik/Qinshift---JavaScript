let broevi = ""

for(let i=1; i<=20;i++){
    if(i%2===0){
        broevi += `${i}\n`        
    }
    else if(i%2!==0){
        broevi += `${i} `;
    }
}

console.log(broevi);

