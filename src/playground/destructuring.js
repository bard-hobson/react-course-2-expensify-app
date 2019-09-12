// const person = {
//     name: 'Brad',
//     age: 37,
//     location: {
//         city: 'Peoria',
//         temp: 68
//     }
// };

// const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (city && temperature) {
//     console.log(`It is ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Cat in the Hat',
//     author: 'Dr. Suess',
//     publisher: {
//        name: 'Penquin'
//     } 
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

// const address = ['123 Main Street', 'Chicago', 'Illinois', '60001'];

// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$2.55', '$2.75'];

const [itemName, ,mediumPrice] = item;
console.log(`A medium ${itemName} cost ${mediumPrice}`);