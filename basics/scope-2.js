
// let name = 'Billy Bob'

if(true) {
    // let name = 'Willy Wob'
    if(true) {
        name = 'Milly Mob' //causes a leaked global 
        console.log(name)
    }
    console.log(name)
}

if(true) {
    console.log(name)
}