const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('The first note ever!')

// notes.splice(1, 1, "Little girl you're in the middle")

notes[2] = 'tree tree tree'

notes.forEach(function(item, index){
  console.log(index)
  console.log(item)
})

console.log(notes.length)
console.log(notes)

for (let count = 0; count <= 2; count++) {
  console.log(count)  
}

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count])  
}

