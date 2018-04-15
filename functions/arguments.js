let add = function(num1, num2, num3) {
  return num1 + num2 + num3
}

let result = add(11, 64, 87)

console.log(result)

let getScoreText = function(name = 'Anony Mouse', score = 0) {
  return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 89);

console.log(scoreText)

let getTip = function(total, percent = .2) {
  return `A ${percent * 100}% tip on $${total} would be $${total * percent}`
}

let tipTwenty = getTip(100)
let tipFiddy = getTip(100, .5)

console.log(tipTwenty)
console.log(tipFiddy)

let name = 'Jerkface'
console.log(`Hey, my name is ${name}`)