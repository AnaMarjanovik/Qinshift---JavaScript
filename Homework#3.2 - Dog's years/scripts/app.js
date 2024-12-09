
let humanYears = prompt("Enter human years.");


function calculateDogYears(human_years){
    let dog_years = human_years*7;
    return `Your dog has ${dog_years} years`;
}

console.log(calculateDogYears(humanYears));


//BONUS: Make the same function work for converting dog to human years as well

// let dog_years = prompt("Enter dog years.");

// function calculateHumanYears(dog_years){
//     let human_years=dog_years/7;
//     return `You have ${human_years} years`;
// }

// console.log(calculateHumanYears(dog_years));