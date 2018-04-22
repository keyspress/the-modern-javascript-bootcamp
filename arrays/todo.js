const todos = ['Get milk', 'Drink milk', 'Cry over having no milk', 'Deny wanting milk in the first place', 'Get more milk']

todos.splice(2, 1)
todos.push('Wonder if you would be happier with cheese')
todos.shift()

console.log(`You have ${todos.length} things to do.`)
console.log(todos)