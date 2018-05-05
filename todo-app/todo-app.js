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


const completeTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${completeTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (item) {
    const todo = document.createElement('p')
    todo.textContent = item.body
    document.querySelector('body').appendChild(todo)
})

document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('You clicked me! Yay!')
})