import React, {useState} from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {connect} from 'react-redux';
import {addTodoAction} from '../redux/actions/todo'

/*
class InputTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }*/

const InputTodo = (props) => {

    const [valueInputNewTodo, setValueInputNewTodo] = useState('')

    const onClick = () => {
        props.addTodoAction(valueInputNewTodo)
        return () => setValueInputNewTodo('')
        }

    return (
        <div className='formAddTodo'>
            <input
                onChange={(event) => setValueInputNewTodo(event.target.value)}
                value={valueInputNewTodo}
                className='inputTodo'
            />
            <NoteAddIcon
                className='iconInputTodo'
                fontSize="small"
            />
            <button
                onClick={onClick}
                className='buttonAddTodo'
            > ADD </button>
        </div>
    )
}

const mapDispatchToProps = { addTodoAction };

export default connect(() => ({}), mapDispatchToProps)(InputTodo);