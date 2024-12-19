function passOrNot(array){
    let sum=0;
    let average;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    average = sum / array.length;

    if(average >= 8){
        console.log("You pass the semestar!");
    }else{
        console.log("You fail the semestar.");
        
    }
}
passOrNot([10,6,8,9,6]);