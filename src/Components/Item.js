import React from "react";
import Comment from "./Comment";

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

function Item({ todo, onChange}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange={ () => onChange(todo.id)}/>
                {todo.title}
            </span>

            <Comment />
        </li>
    )
}

export default Item;
