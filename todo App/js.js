let notes = ['hello', 'world', 'precious'];
//shortcut for console.log
let log = console.log;

//container for notes
let noteWrapper = document.getElementById('note-wrapper');

let noteId = 0;
//notes
let note;

//function to input note when user press add button
function addNote() {
    note = document.getElementById('note');
    if (note.value === '') {
        note.placeholder = "Please Enter a valid Value";
    } else {

        notes.push(note.value);
        update();
        noteId++;
        note.value=null;
        note.placeholder='Add another note!';
    }
}
function update() {
    noteWrapper.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        noteWrapper.innerHTML += '<div class=notes ><p>' + notes[i] + '<a href="#" class=delLink onclick=delNote(' + noteId + ')></a></p></div>';

    }

}

update();

function delNote(noteId) {
    notes.pop(noteId);
    update();

}

// log(noteWrapper);