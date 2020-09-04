import React from "react";
import Item from "./Item";

function List(props) {
    return (
        <ul>
            { props.arrNote.map(todo => {
                return <Item todo={todo} key={todo.id}/>
            })}
        </ul>
    )
}

export default List;