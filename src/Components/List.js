import React from "react";
import Item from "./Item";


function List(props) {
    return (
        <ul className='listUl'>
            { props.todoes.map(todo => {
                return <Item
                    todo={todo}
                    key={todo.id}
                    onCheckMark={props.сheckMark}
                    selectComment={props.addComment}
                    getId={props.getId}
                />
            })}
        </ul>
    )
}

export default List;