import React from "react";
import List from "./List";

function Note() {
    let [arrNote, setArrNote] = React.useState([
        { id: 1, complete: false, title: 'note one'},
        { id: 2, complete: false, title: 'note two'},
        { id: 3, complete: false, title: 'note three'},
    ]);

    function swithTodo(id) {
        setArrNote(
            arrNote.map(() => {
            if (arrNote.id === id) {
                arrNote.complete = !arrNote.complete
            }
            return arrNote;
            })
        )
    }

    return (
        <div>
            <input className="noteInput" type="text"></input>
            <List arrNote={arrNote} switch={swithTodo}/>
        </div>
    )
}

export default Note;