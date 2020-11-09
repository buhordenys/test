import React, {useCallback} from 'react'
import {useDispatch} from 'react-redux';
import {editComment} from "../redux/actions/todo";


function TextAreaComment(props) {
        const dispatch = useDispatch()

        const edit = useCallback((value, id) => dispatch(editComment(value, id)), [dispatch])

        return <textarea
            placeholder="write your comment for note"
            value={props.todo.valueComment}
            onChange={(event)=> edit(event.target.value, props.todo.id)}
            className="textAreaComment"
            rows="5"
            disabled={props.todo.complete}
        />
}

export default TextAreaComment;




/*
const mapDispatchToProps = {editComment}
*/


/* todo предыдуще реализованный код:

class TextAreaComment extends React.Component {
    constructor(props) {
        super(props)
        this.textareaOn = this.textareaOn.bind(this)
        this.textareaOff = this.textareaOff.bind(this)
        this.state = { isOpen: false }
    }

    textareaOn() {
        this.setState({ isOpen: true })
    }

    textareaOff() {
        this.setState({ isOpen: false })
    }

    render() {
        const isOpen = this.state.isOpen
        let button

        if (isOpen) {
            button = <CommentoutButton onClick={this.textareaOff} />;
        } else {
            button = <CommentButton onClick={this.textareaOn} valueComment={this.props.thisTodo.valueComment}/>;
        }

        return (
            <div>
                {button}
                <SetComment
                    textareaOff={this.textareaOff}
                    isOpen={isOpen}
                    valueComment={this.props.thisTodo.valueComment}
                    thisId={this.props.thisTodo.id}
                    addCommemt={this.props.selectComment}
                />
            </div>
        )
    }

}


function CommentoutButton(props) {
    return (
        <button className="buttonCommentOut" onClick={props.onClick}>
            Comment
        </button>
    )
}

function CommentButton(props) {
    return (
        <button className={props.valueComment.length > 0  ? 'buttonCommentOut' : 'buttonComment'} onClick={props.onClick}>
            Comment
        </button>
    )
}
*/

