import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


function Item({ todo, onCheckMark, selectComment}) {
    let classes = []

    if (todo.complete) {
        classes.push('completedItem')
    }

    const StyleButton = withStyles({
        root: {
            minWidth: 25,
        }
    })(Button)

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
                />

              {todo.title}
            </span>

            <TextAreaComment selectComment={selectComment} thisTodo={todo}/>
        </li>
    )
}

export default Item;
