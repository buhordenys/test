import React from "react";
import Item from "./Item";


function List(props) {
    console.log(props.todoes)
    return (
        <ul className='listUl'>
            { props.todoes.map(todo => {
                return <Item todo={todo} key={todo.id} onCheckMark={props.сheckMark} getId={props.getId}/>
            })}
        </ul>
    )
}

export default List;