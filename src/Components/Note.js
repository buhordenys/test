import React from "react";
import List from "./List";

//todo rename Note to Notes
function Note() {
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

    return (
        <div>
            <input className="noteInput" type="text"></input>
            <List arrNote={arrNote} switch={switchTodo}/>
        </div>
    )
}

export default Note;