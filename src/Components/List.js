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
    console.log(props.todoes)
    return (
        <ul style={style.ul}>
            { props.todoes.map(todo => {
                return <Item todo={todo} key={todo.id} onCheckMark={props.сheckMark}/>
            })}
        </ul>
    )
}

export default List;