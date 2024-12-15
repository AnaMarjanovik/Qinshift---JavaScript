function fisrtNameLastName(array1, array2){
    let fullName="";
    
    for(let i = 0; i<array1.length; i++){
        fullName += i+1 +"." + array1[i] + " " + array2[i] + '\n';   
    }

    console.log(fullName);
}

let array1 = ["Ana","Ivica"];
let array2 = ["Marjanovik","Rodikj"];

fisrtNameLastName(array1,array2);




