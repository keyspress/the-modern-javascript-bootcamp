const todos = ['Get milk', 'Drink milk', 'Cry over having no milk', 'Deny wanting milk in the first place', 'Get more milk']

// todos.splice(2, 1)
// todos.push('Wonder if you would be happier with cheese')
// todos.shift()

// console.log(`You have ${todos.length} things to do.`)
// todos.forEach(function(item, index) {
//   console.log(`${index + 1}. ${item}`)
// })

for (let count = 0; count < todos.length; count++) {
  console.log(`${count + 1}. ${todos[count]}`)
}