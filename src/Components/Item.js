import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';


function Item({ todo, onCheckMark, selectComment, editTodo}) {
    let classes = []

    if (todo.complete) {
        classes.push('completedItem')
    }

    return (
        <li className='listLi'>
            <span className={classes.join(' ')}>
                <Checkbox
                  size="small"
                  checked={todo.complete}
                  onChange={()=>{onCheckMark(todo.id)}}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <TextField
                    placeholder="You didn't input note"
                    id="standard-read-only-input"
                    multiline={true}
                    onChange={(event)=> editTodo(todo.id, event.target.value)}
                    defaultValue={todo.title}
                />
            </span>

            <TextAreaComment selectComment={selectComment} thisTodo={todo}/>
        </li>
    )
}

export default Item;
