import React from 'react';

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
                <i className='iconInputTodo' />
                <button onClick={this.onClick} className='buttonAddTodo'> ADD </button>
            </div>
        )
    }
}

export default InputTodo;