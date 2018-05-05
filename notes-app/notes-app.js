
const notes = [{
    title: 'My next trip',
    body: 'I want to go to Jupiter'
}, {
    title: 'Habbits to work on',
    body: 'Code more'
}, {
    title: 'Office modifications',
    body: 'Get an office'
}]

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'oooo I like that'
})

document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})