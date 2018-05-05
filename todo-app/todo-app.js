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
    searchText: ''
}

const renderTodos = function(todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.body.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })    

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (item) {
        const todo = document.createElement('p')
        todo.textContent = item.body
        document.querySelector('#todos').appendChild(todo)
    })
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('You clicked me! Yay!')
})

document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})

document.querySelector('#search-todos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})