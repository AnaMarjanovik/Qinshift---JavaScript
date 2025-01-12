$(document).ready(function(){
    let descritpionInput = $("#description");
    let amountInput = $("#amount");
    let dropdrownInput = $("#dropdrown");
    let buttonInput = $("#button");
    let list = $("#listOfExpenses");

    buttonInput.on("click", function(){
        let description = descritpionInput.val();
        let amount = amountInput.val();
        let category = dropdrownInput.val();
        
        if (description === "" || amount === "" || category === "") {
            alert("Please fill in all fields.");
            return;
        }

        let newExpense = `
        <tr>
            <td>${description}</td>
            <td>${amount}</td>
            <td>${category}</td>
        </tr> `;


    list.append(newExpense);

    descriptionInput.val('');
    amountInput.val('');
    dropdownInput.val('food');

    })
    
})