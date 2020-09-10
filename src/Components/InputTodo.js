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
            <div>
                <input onChange={this.onChange} value={this.state.value}/>
                <button onClick={this.onClick} > ADD... </button>
            </div>
        )
    }
}

export default InputTodo;