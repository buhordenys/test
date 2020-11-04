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

    const [count, setCount] = useState('')

    const onClick = () => {
        props.addTodoAction(count)
        return () => setCount('')
        }

    return (
        <div className='formAddTodo'>
            <input
                onChange={(event) => setCount(event.target.value)}
                value={count}
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