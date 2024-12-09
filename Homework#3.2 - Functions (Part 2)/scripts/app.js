
let humanYears = prompt("Enter human years.");


function calculateDogYears(human_years){
    let dog_years = human_years*7;
    return `Your dog has ${dog_years} years`;
}

console.log(calculateDogYears(humanYears));
