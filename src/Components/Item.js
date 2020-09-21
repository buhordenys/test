import React from "react";
import TextAreaComment from "./TextAreaComment";

function Item({ todo, onCheckMark, selectComment}) {
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
                    onChange={()=>{onCheckMark(todo.id)}}
                    className='checkboxLi'
                />
                {todo.title}
            </span>

            <TextAreaComment selectComment={selectComment} thisTodo={todo}/>
        </li>
    )
}

export default Item;
