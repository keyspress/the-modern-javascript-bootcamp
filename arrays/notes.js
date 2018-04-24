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

const findNote = function (notes, noteTitle) {
  const index = notes.findIndex(function(note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
  return notes[index]
}

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, 'office modifications')
console.log(note)
