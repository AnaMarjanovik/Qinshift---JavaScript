function Animal(name, kind) {
    this.name = name;
    this.kind = kind;

    this.speak = function (message) {
        console.log(this.kind + ` says: ` + message);
    }
}

let message = prompt("What does the animal say?");
let myAnimal = new Animal("Ahri", "Dog");
myAnimal.speak(message);


