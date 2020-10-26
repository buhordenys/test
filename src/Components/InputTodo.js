import React from 'react';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {connect} from 'react-redux';
import {addTodoAction} from '../redux/actions/todo'


class InputTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    onChange = (event) => {
        this.setState(
            { value: event.target.value }
        )}

    onClick = () => {
        this.props.addTodoAction(this.state.value);
        this.setState(
            { value: '' }
        )}

    render() {
        return(
            <div className='formAddTodo'>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    className='inputTodo'
                />
                <NoteAddIcon
                    className='iconInputTodo'
                    fontSize="small"
                />
                <button
                    onClick={this.onClick}
                    className='buttonAddTodo'
                > ADD </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTodoAction: () => dispatch(addTodoAction()),
})

export default connect(() => ({}), mapDispatchToProps)(InputTodo);