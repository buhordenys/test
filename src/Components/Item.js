import React from "react";
import TextAreaComment from "./TextAreaComment";

function Item({ todo, onCheckMark, getId}) {
    let clases = []

    if (todo.complete) {
        clases.push('completedItem')
    }
    console.log(todo)

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

            <TextAreaComment valueComment={todo.valueComment} getId={getId}/>
        </li>
    )
}

export default Item;
