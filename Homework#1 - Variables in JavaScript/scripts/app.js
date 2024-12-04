/*Write a JavaScript program that will calculate the price of 30 Phones,
 where the price of one phone is $119.95 and the tax rate is 5%.*/

let calculated_price;
let number_of_phones=30;
let price_per_phone=119.95;
let tax_rate_per_phone;

tax_rate_per_phone=price_per_phone*0.05;

calculated_price=number_of_phones*(price_per_phone+tax_rate_per_phone);

console.log("Calculated price of 30 Phones is:");
console.log(calculated_price);