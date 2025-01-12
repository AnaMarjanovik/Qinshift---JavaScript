$(document).ready(function() {
    let descriptionInput = $("#description");
    let amountInput = $("#amount");
    let dropdownInput = $("#dropdrown");
    let buttonInput = $("#button");
    let list = $("#listOfExpenses");
    let totalExpenseField = $("#totalExpense");
    let totalExpense = 0;  


    buttonInput.on("click", function() {
        let description = descriptionInput.val();  
        let amount = parseInt(amountInput.val());  
        let category = dropdownInput.val();        

        totalExpense += amount;  
        
        let newExpense = `
        <tr>
            <td>${description}</td>
            <td>${amount}</td>
            <td>${category}</td>
            <td><button id="deleteButton">Delete</button>
        </tr>`;

        list.append(newExpense);
        updateTotalExpenses(totalExpense);
        
        descriptionInput.val('');
        amountInput.val('');
        dropdownInput.val('food');  
    });

    function updateTotalExpenses(total) {
        totalExpenseField.text(`Total Expenses: ${total} DEN`);
    }
});
