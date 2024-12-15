function sumOfNumbers(array = [num1,num2,num3,num4,num5]){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}

console.log(sumOfNumbers(1,2,3,4,5));

