let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal Farm';

// console.log(`${myBook.title} by ${myBook.author}`);

let person = {
    name: 'Jimmy Bob',
    age: 23,
    location: 'Alabama'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1;

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)