import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

function Item({ todo, onCheckMark, selectComment, editTodo}) {
    const classesCss = useStyles();

    return (
        <li className='listLi'>
            <div className={`todo-item ${todo.complete ? 'completed-item' : ''}`}>
                <Checkbox
                  size="small"
                  checked={todo.complete}
                  onChange={()=>{onCheckMark(todo.id)}}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <TextField
                    className={classesCss.root}
                    placeholder="You didn't input note"
                    multiline={true}
                    onChange={(event)=> editTodo(todo.id, event.target.value)}
                    defaultValue={todo.title}
                />
            </div>

            <TextAreaComment selectComment={selectComment} thisTodo={todo}/>
        </li>
    )
}

export default Item;
