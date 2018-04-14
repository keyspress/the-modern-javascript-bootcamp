// Lexical Scope (Static Scope)
// Global Scope - Defined outiside of all code blocks
// Local Scope - Defined inside of a code block


// Global (varOne)
    //Local (varTwo)
        //Local (varFour)
    //Local (varThree)
    
let varOne = 'varOne'

if(true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if(true) {
        let varFour = 'varFour'
    }
}

if(true) {
    let varThree = 'varThree'
}

console.log(varTwo)