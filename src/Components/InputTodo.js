import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

class InputTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onChange = (event) => {
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    onClick = () => {
        this.props.addTodo(this.state.value);
        this.setState(
            {
                value: ''
            }
        )
    }

    render() {
        return(
            <div className='formAddTodo'>
                <input onChange={this.onChange} value={this.state.value} className='inputTodo'/>
                <NoteAddIcon className='iconInputTodo' fontSize="small" />
                <button onClick={this.onClick} className='buttonAddTodo'> ADD </button>
            </div>
        )
    }
}

export default InputTodo;