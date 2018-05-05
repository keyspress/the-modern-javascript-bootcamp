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

const summary = document.createElement('p')
summary.textContent = `You have ${todos.length} todos left.`
document.querySelector('body').appendChild(summary)

todos.forEach(function(item) {
    const todo = document.createElement('p')
    todo.textContent = item.body
    document.querySelector('body').appendChild(todo)
})

// const ps = document.querySelectorAll('p')

// ps.forEach(function(p) {
//     if(p.textContent.includes('the')) {
//         p.remove()
//     }
// })