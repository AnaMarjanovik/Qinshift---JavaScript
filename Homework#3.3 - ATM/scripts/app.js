let money = prompt("Enter the money in your bank account!");
let withdraw = prompt("Enter the amount you want to withdraw");


function ATM(money,withdraw){

    money = Number(money);
    withdraw = Number(withdraw);
    
    if(money>=withdraw){
        return money-withdraw;
    }
    else{
        return `Not enough money!`;
    }
}


console.log(`The money you want to withdraw is: ${withdraw}`);
console.log(`The money you have left is: ` + ATM(money,withdraw));


