import React, {useCallback} from "react";
import TextAreaComment from "./TextAreaComment";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux';
import {completedTodo, changeTodo, deleteTodo} from "../redux/actions/todo";


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

function Item(props) {
    const classes = useStyles()

    const dispatch = useDispatch()

    const change = useCallback((value, id) => dispatch(changeTodo(value, id)), [dispatch])
    const completed = useCallback((value, id) => dispatch(completedTodo(value, id)), [dispatch])
    const deleteItem = useCallback((id) => dispatch(deleteTodo(id)), [dispatch])

    const onCheckMark = (value, id) => {
        setTimeout( () => {
            deleteItem(id)
        }, 5000)
        return completed(value, id)

    }

    // todo onClick, onFocus: let stopProp = (event) => event.stopPropagation();

    return (
        <li className='listLi'>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        className={
                            props.todo.valueComment && (props.todo.valueComment.length > 0)
                                ? classes.accordionSummary
                                : ''
                        }
                        expandIcon={<ExpandMoreIcon />}
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                    >
                        <Checkbox
                            aria-label="Acknowledge"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            checked={props.todo.complete}
                            disabled={props.todo.complete}
                            onChange={()=>{onCheckMark(!props.todo.complete, props.todo.id)}}
                        />
                        <TextField
                            className={`${classes.root} ${props.todo.complete ? classes.completed : ''}`}
                            disabled={props.todo.complete}
                            placeholder="You didn't input note"
                            multiline={true}
                            onClick={(event) => event.stopPropagation()}
                            onChange={(event) => {
                                    change(event.target.value, props.todo.id)
                                }
                            }
                            defaultValue={props.todo.title}
                        />
                    </AccordionSummary>

                    <TextAreaComment todo={props.todo} />

                </Accordion>
            </div>
        </li>
    )
}

export default Item;


/*
const mapDispatchToProps = {
    changeTodo,
    completedTodo,
    deleteTodo,
}*/


/*const mapStateToProps = (state) => ({
    todo: selectCategoryTodos(state),
})
*/

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
