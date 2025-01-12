$(document).ready(function(){

    let button = $("#buttoon");
    let newInput = $("#my_input");
    let greet_message = $("#message");
    
    button.on("click",function(my_input){
        let inputValue = newInput.val();
        greet_message.text(`Hello there ${inputValue} !`);
    })

})