import React from "react";
import List from "./List";


function Notes() {
    let [arrNote, setArrNote] = React.useState([
        { id: 1, complete: false, title: 'note one'},
        { id: 2, complete: false, title: 'note two'},
        { id: 3, complete: false, title: 'note three'},
    ]);

    function switchTodo(id) {
        setArrNote(
            arrNote.map((note) => {
                if (note.id === id) {
                    note.complete = !note.complete
                }

                return note;
            })
        )
    }

    function clearTodo(id) {
        setTimeout( () => {
                setArrNote(
                    arrNote.filter(note => note.id !== id)
                );
                console.log(arrNote)
            },
            5000)
        console.log(arrNote)

    }

    return (
        <div>
            <input className="noteInput" type="text"></input>
            <List arrNote={arrNote} switch={switchTodo} clearArr={clearTodo}/>
        </div>
    )
}

export default Notes;