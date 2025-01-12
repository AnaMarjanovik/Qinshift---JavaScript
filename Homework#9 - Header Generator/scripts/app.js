$(document).ready(function(){
    let textLikeInput = $("#text11");
    let colorLikeInput = $("#color");
    let buttonClick = $("#buttonClick");
    let header = $("#theHeader");
    let message = $("#messageElement");

    buttonClick.on("click",function(){
        let inputText = textLikeInput.val();
        let inputColor = colorLikeInput.val();
        let validColors = ["yellow", "green", "blue", "red", "cyan", "orange", "black", "white", "purple", "pink", "gray"]  

        if(!textLikeInput.val() || !colorLikeInput.val()){
            message.text("Error: You entered an invalid value for inputs !");
            header.text("");
        }
        else{
            message.text("");
            header.text(`The text is: ${inputText}, and the color is: ${inputColor}.`);
        }
    }) 
})