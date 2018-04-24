const todos = [{
  body: 'Get milk',
  completed: true
}, {
  body: 'Drink milk',
  completed: true
}, {
  body: 'Cry over having no milk',
  completed: true
}, {
  body: 'Deny wanting milk in the first place',
  completed: false
}, {
  body: 'Get more milk',
  completed: false
}]

const deleteTodo = function(array, todoBody) {
  const index = array.findIndex(function (todo, index) {
    return todo.body.toLowerCase() === todoBody.toLowerCase()
  })
  if (index > -1 ) {
    return todos.splice(index, 1)
  }  
}

deleteTodo(todos, 'hfdfdfd');
console.log(todos);