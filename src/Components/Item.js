import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import { makeStyles } from '@material-ui/core/styles';


function Item({ todo, onCheckMark, selectComment, editTodo}) {
    let classes = []

    let read = false

    if (todo.complete) {
        classes.push('completedItem')
    }

    const StyleButton = withStyles({
        root: {
            minWidth: 25,
        }
    })(Button)

    /*const StyleTextField = makeStyles({
        root: {
            width: 100
        }
    })(TextField)*/

    return (
        <li className='listLi'>
            <span className={classes.join(' ')}>
                <Checkbox
                  size="small"
                  checked={todo.complete}
                  onChange={()=>{onCheckMark(todo.id)}}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <StyleButton
                    className="edit"
                    size="small"
                    startIcon={<EditIcon fontSize="inherit"/>}
                    onClick={() => {
                        read = !read;
                    }} //todo ч-з функцию при клике вкл/выкл редактирование текстового окна ниже

                    //todo текстовое окно с @material-ui/core, которое имеет тумблер (контролированный едитом)
                />
                <TextField
                    placeholder="You didn't input note"
                    id="standard-read-only-input"
                    multiline="true"
                    onChange={(event)=> editTodo(todo.id, event.target.value)}
                    defaultValue={todo.title}
                    InputProps={{
                        readOnly: read,
                        focused: true
                    }}
                />
            </span>


            <TextAreaComment selectComment={selectComment} thisTodo={todo}/>
        </li>
    )
}

export default Item;
