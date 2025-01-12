let numbers = [1,2,3,4,5];
let list = document.getElementById('listWithNumbers');
let resultParagraph = document.getElementById('sum');


function printNumbersInList(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        list.innerHTML += `<li>${numbers[i]}</li>`;
    }
}

function printSum(numbers, element) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    element.innerHTML = `The sum of the numbers from the list is: ${sum}`;
}

printNumbersInList(numbers);
printSum(numbers, resultParagraph);