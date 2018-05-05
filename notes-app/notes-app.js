//DOM - Document Object Model

//Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
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

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    // p.remove()
    // console.log(p.textContent)
    p.textContent = "Don't look at this!!!"
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This a new element from JS'
document.querySelector('body').appendChild(newParagraph)