$(document).ready(function () {
    let fName = $("#firstName");
    let lName = $("#lastName");
    let number = $("#phoneNumber");
    let button = $("#saveButton");
    let contacts = []; 
    let tableBody = $("#newContacts");

    button.on("click", function () {
        let firstName = fName.val();
        let lastName = lName.val();
        let phoneNumber = number.val();


        let contact = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        };

        contacts.push(contact);

        let newRow = `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.phoneNumber}</td>
            </tr>
        `;

        tableBody.append(newRow);

        fName.val('');
        lName.val('');
        number.val('');
    });
});
