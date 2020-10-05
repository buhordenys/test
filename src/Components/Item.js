import React from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    completed: {
        textDecoration: "line-through",
        color: "#f50057",
    },
    accordionSummary: {
        '& .MuiAccordionSummary-expandIcon': {
            color: "red",
        }
    }
}));

function Item({ todo, onCheckMark, selectComment, editTodo}) {
    const classes = useStyles();

    // todo onClick, onFocus: let stopProp = (event) => event.stopPropagation();

    return (
        <li className='listLi'>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        className={todo.valueComment && (todo.valueComment.length > 0)  ? classes.accordionSummary : ''}
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Checkbox
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            checked={todo.complete}
                            disabled={todo.complete}
                            onChange={()=>{onCheckMark(todo.id, !todo.complete)}}
                        />
                        <TextField
                            className={`${classes.root} ${todo.complete ? classes.completed : ''}`}
                            disabled={todo.complete}
                            placeholder="You didn't input note"
                            multiline={true}
                            onClick={(event) => event.stopPropagation()}
                            onChange={(event)=> editTodo(todo.id, event.target.value)}
                            defaultValue={todo.title}
                        />
                    </AccordionSummary>

                    <TextAreaComment selectComment={selectComment} thisTodo={todo}/>


                </Accordion>
            </div>
        </li>
    )
}

export default Item;


/*
const styles = theme => ({
  expanded: {
    "& $icon": {
      transform: "translateY(-50%) rotate(90deg)"
    }
  },
  icon: {}
});

<ExpansionPanelSummary
    expandIcon={<ExpandMoreIcon classes={{ root: classes.icon }} />}
    classes={{ expanded: classes.expanded }}
>

 */


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

todo.valueComment.length > 0  ? 'button-out' : ''



*/
