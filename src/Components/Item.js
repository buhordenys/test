import React from "react";
import Comment from "./Comment";

function Item({todo}) {
    return (
        <li>
            {todo.title}<Comment />
        </li>
    )
}

export default Item;
