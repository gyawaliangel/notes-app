
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function (note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('/index.html')
}


noteTitle.value = note.title
noteBody.value = note.body

noteTitle.addEventListener('change',function(e){
    note.title = e.target.value
    saveNotes(notes)
    
})

noteBody.addEventListener('change',function(e){
    note.body = e.target.value
    saveNotes(notes)
})

const removeBtn = document.querySelector('#remove-note')
removeBtn.addEventListener('click',function(e){
    removeNotes(note.id)
    saveNotes(notes)
    location.assign('/index.html')

})