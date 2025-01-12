function contact(name,number){
    this.name = name;
    this.number = number;
}

let contactArray = [];



function addNewContact(){
    while(true){
    let question = prompt("Do you want to add a new contact in your Phone Book ? - Enter yes or no");
    if(question === "yes"){
        let personName = prompt("Enter person's name.");
        let personNumber = prompt("Enter person's number.");
        
        let newContact = new contact(personName,personNumber);
        contactArray.push(newContact);

        alert("You successfuly added a new contact!");
    }
    else if(question === "no"){
        alert("Add a new contact later. ");
        break;
    }
}

for (let i = 0; i < contactArray.length; i++) {
    console.log(`${contactArray[i].name}  ${contactArray[i].number}`);
} 
}

addNewContact();

