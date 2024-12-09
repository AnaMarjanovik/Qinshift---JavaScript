let year = prompt("Enter your birth year !");
console.log(year);
calculated_variable = (year-4)%12;

switch(calculated_variable){
        case 0:
            alert("You are Rat");
        break;

        case 1:
            alert("You are Ox");
        break;

        case 2:
            alert("You are Tiger");
        break;

        case 3: 
            alert("You are Rabbit");
        break;

        case 4:
            alert("You are Dragon");
        break;

        case 5:
            alert("You are Snake");
        break;

        case 6:
            alert("You are Horse");
        break;

        case 7: 
            alert("You are Goat");
        break;

        case 8:
            alert("You are Monkey");
        break;

        case 9:
            alert("You are Rooster");
        break;

        case 10:
            alert("You are Dog");
        break;

        case 11:
            alert("You are Pig");
        break;            
}
