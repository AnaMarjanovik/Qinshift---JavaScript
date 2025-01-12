$(document).ready(function(){
    let firstNumber = ''; 
    let secondNumber = ''; 
    let operator = '';      

    let buttonOne = $("#one");
    let buttonTwo = $("#two");
    let buttonThree = $("#three");
    let buttonFour = $("#four");
    let buttonFive = $("#five");
    let buttonSix = $("#six");
    let buttonSeven = $("#seven");
    let buttonEight = $("#eight");
    let buttonNine = $("#nine");
    let buttonZero = $("#zero");
    let buttonDot = $("#dot");
    let buttonPlus = $("#plus");
    let buttonMinus = $("#minus");
    let buttonSlash = $("#slash");
    let buttonMultiplication = $("#multiplication");
    let buttonEqual = $("#equal");
    let buttonClear = $("#clear");
    let display = $("#display");

    $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero").on("click", function() {
        if (operator === '') {
            firstNumber += $(this).text();  
        } else {
            secondNumber += $(this).text(); 
        }
    });

    buttonPlus.on("click", function() {
        if (firstNumber !== '') {
            operator = '+';
        }
    });

    buttonMinus.on("click", function() {
        if (firstNumber !== '') {
            operator = '-';
        }
    });

    buttonSlash.on("click", function() {
        if (firstNumber !== '') {
            operator = '/';
        }
    });

    buttonMultiplication.on("click", function() {
        if (firstNumber !== '') {
            operator = 'X';
        }
    });


    buttonEqual.on("click", function() {
        let result;
        if (firstNumber !== '' && secondNumber !== '' && operator !== '') {
            switch (operator) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '/':
                    result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
                case 'X':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
            }

            display.text(result); 
        }
    });

    buttonClear.on("click", function() {
        firstNumber = ''; 
        secondNumber = '';
        operator = ''; 
        display.text(''); 
    });
});
