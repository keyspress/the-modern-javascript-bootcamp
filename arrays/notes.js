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

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNotes = function(notes, query) {
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

const sortNotes = function(notes) {
  notes.sort(function (a, b) {
    if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  })
}

// console.log(findNotes(notes, 'eating'));

// const note = findNote(notes, 'office modifications')
// console.log(note)

sortNotes(notes)
console.log(notes)
