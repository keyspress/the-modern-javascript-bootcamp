

let greetUser = function() {
    console.log('Oh! Func-y!')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

console.log(square(5))
console.log(square(100))

let convertFahrenheitToCelcius = function(temp) {
    let result = (temp - 32) * 5 / 9
    return result
}

console.log(convertFahrenheitToCelcius(69))