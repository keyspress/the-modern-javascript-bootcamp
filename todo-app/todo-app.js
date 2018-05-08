let todos = []

const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
if (todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })    

    const renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    renderedTodos.forEach(function (item) {
        const todo = document.createElement('p')
        todo.textContent = item.body
        document.querySelector('#todos').appendChild(todo)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({ body: e.target.elements.newTodo.value, completed: false })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector("#hide-completed").addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked  
    renderTodos(todos, filters)  
})