// Fetch existing todos from localStorage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    const renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    renderedTodos.forEach(function (item) {
        document.querySelector('#todos').appendChild(generateTodoDOM(item))
    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (item) {
    const todo = document.createElement('p')
    todo.textContent = item.body
    return todo    
}

// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}