import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
}));

function Item({ todo, onCheckMark, selectComment, editTodo}) {
    const classes = useStyles();
    return (
        <li className='listLi'>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary

                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox
                                checked={todo.complete}
                                onChange={()=>{onCheckMark(todo.id)}}
                            />}
                            placeholder="You didn't input note"
                            onChange={(event)=> editTodo(todo.id, event.target.value)}
                            label={todo.title}
                        />
                    </AccordionSummary>

                    <TextAreaComment selectComment={selectComment} thisTodo={todo}/>


                </Accordion>
            </div>
        </li>
    )
}

export default Item;



/*todo предыдущее решение без использования Material-ui:

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





*/
