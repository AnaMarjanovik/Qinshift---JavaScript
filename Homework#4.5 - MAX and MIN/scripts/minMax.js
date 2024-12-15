function sumOfMinAndMaax(array){
    let max=array[0];
    let min=array[0];
    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min=array[i];
        }
        if(array[i]>max){
            max=array[i];
        }
    }  
    let sum = max + min;
    console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
}
 sumOfMinAndMaax(array=[1,2,3,4,5]);
 

 // BONUS
//  function sumOfMinAndMaax(array){
//     let max=array[0];
//     let min=array[0];
//     for(let i=0; i<array.length; i++){
//         if(array[i]<min){
//             min=array[i];
//         }
//         if(array[i]>max){
//             max=array[i];
//         }
//     }  
//     let sum = max + min;
//     console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
// }
// let array1=[1, 2.5, "Ana", 205];
// sumOfMinAndMaax(array1);
