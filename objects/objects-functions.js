// let myBook = {
//     title: '1984',
//     author: 'George Orwell',
//     pageCount: 326
// }

// let otherBook = {
//     title: 'A Peoples History',
//     author: 'Howard Zinn',
//     pageCount: 723
// }

// let getSummary = function (book) {
//     return {
//         summary: `${book.title} by ${book.author}`,
//         pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
//     }

//     console.log(`${book.title} by ${book.author}`);
// }

// let bookSummary = getSummary(myBook);
// let otherBookSummary = getSummary(otherBook);

// console.log(bookSummary.pageCountSummary);

let tempConversion = function (fah) {
    return {
        fahrenheit: fah,
        celcius: (fah - 32) * 5 / 9,
        kelvin: (fah + 459.67) * 5 / 9
    }
}

let temp = tempConversion(32);

console.log(temp.celcius);
