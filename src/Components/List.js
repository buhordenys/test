import React from "react";
import Item from "./Item";

let style = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function List(props) {
    return (
        <ul style={style.ul}>
            { props.arrNote.map(todo => {
                return <Item todo={todo} key={todo.id} onDelete={props.cleanItem} onCheck={props.сheckMark}/>
            })}
        </ul>
    )
}

export default List;