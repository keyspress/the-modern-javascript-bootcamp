
const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
    if(p.includes('the')) {
        p.remove()
    }
})