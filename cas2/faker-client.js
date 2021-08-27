const faker = require('faker');

console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.phone.phoneNumber()); 
console.log(faker.address.streetAddress());
console.log(faker.finance.bitcoinAddress());
console.log(faker.finance.ethereumAddress());
console.log(faker.finance.creditCardNumber());
console.log(faker.finance.creditCardCVV());
console.log(faker.finance.transactionDescription());
console.log(faker.finance.transactionType());

// console.log(faker.helpers.createCard());
// console.log(faker);

