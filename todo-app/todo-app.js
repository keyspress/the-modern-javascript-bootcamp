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

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })    

    let renderedTodos = filters.hideCompleted ? incompleteTodos : filteredTodos
    // if(filters.hideCompleted) {
    //     renderedTodos = incompleteTodos
    // } else {
    //     renderedTodos = filteredTodos
    // }

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
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector("#hide-completed").addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked  
    renderTodos(todos, filters)  
})