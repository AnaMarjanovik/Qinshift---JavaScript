let year = prompt("Enter your birth year ! ");
console.log(year);

let calculated_sign;
calculated_sign = (year-4)%12;

if(calculated_sign===0){
    alert("In Chinese Zodiac you are Rat");
}else if(calculated_sign===1){
    alert("In Chinese Zodiac you are Ox");
}else if(calculated_sign===2){
    alert("In Chinese Zodiac you are Tiger");
}else if(calculated_sign===3){
    alert("In Chinese Zodiac you are Rabbit");
}else if(calculated_sign===4){
    alert("In Chinese Zodiac you are Dragon");
}else if(calculated_sign===5){
    alert("In Chinese Zodiac you are Snake");
}else if(calculated_sign===6){
    alert("In Chinese Zodiac you are Horse");
}else if(calculated_sign===7){
    alert("In Chinese Zodiac you are Goat");
}else if(calculated_sign===8){
    alert("In Chinese Zodiac you are Monkey");
}else if(calculated_sign===9){
    alert("In Chinese Zodiac you are Rooster");
}else if(calculated_sign===10){
    alert("In Chinese Zodiac you are Dog");
}else if(calculated_sign===11){
    alert("In Chinese Zodiac you are Pig");
}
