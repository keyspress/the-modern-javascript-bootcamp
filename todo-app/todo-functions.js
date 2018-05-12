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
    const todo = document.createElement('div')
    const todoText = document.createElement('span')
    const checkBox = document.createElement('input')

    // Setup Todo text 
    todoText.textContent = item.body
    todo.appendChild(todoText)

    // Setup checkbox
    checkBox.setAttribute('type', 'checkbox')
    todo.appendChild(checkBox)
    
    return todo    
}

// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}