let todos = [];

function addToDos(array){
    for(let i = 0; i < array.length; i++){
        todos.push(array[i]);
    }
}

function display(){
    console.log('Your ToDo list: ');
    for(let i = 0; i < todos.length; i++){
        console.log(`${i+1}. ${todos[i]}`);
    }
}

addToDos(['do the laundry', 'wash the dishes', 'study for the test', 'cook dinner']);
display();


