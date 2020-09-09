import React from "react";
//import Comment from "./Comment";
import TextAreaComment from "./TextAreaComment";

let styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem',
    }
}

function Item({ todo, onCheckMark, getId}) {
    let clases = []

    if (todo.complete) {
        clases.push('completedItem')
    }

    return (
        <li style={styles.li}>
            <span className={clases.join(' ')}>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    style={styles.input}
                    onChange={()=>{onCheckMark(todo.id)}}
                />
                {todo.title}
            </span>

            <TextAreaComment todo={todo} getId={getId}/>
        </li>
    )
}

export default Item;
