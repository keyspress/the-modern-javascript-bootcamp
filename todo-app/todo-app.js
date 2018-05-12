const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

getSavedTodos()

renderTodos(todos, filters)

document.querySelector('#search-todos').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({ body: e.target.elements.newTodo.value, completed: false })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector("#hide-completed").addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked  
    renderTodos(todos, filters)  
})