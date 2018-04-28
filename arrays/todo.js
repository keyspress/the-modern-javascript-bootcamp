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

const getThingsToDo = function(array) {
  return todos.filter(function(item, index) {
    return !item.completed 
  })
}

const sortTodos = function(array) {
  todos.sort(function(a, b) {
    if(b.completed > a.completed) {
      return -1
    } else if (a.completed > b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

// TEACHER SOLUTION
// const sortTodos = function (array) {
//   todos.sort(function (a, b) {
//     if (!a.completed && b.completed) {
//       return -1
//     } else if (!b.completed && a.completed) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'hfdfdfd');
// console.log(todos);