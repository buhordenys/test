import React from "react";
//import Comment from "./Comment";
import TextAreaComment from "./TextAreaComment";

let styles = {
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
        <li className='listLi'>
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
