import React from 'react'
import {connect} from 'react-redux';
import {editComment} from "../redux/actions/todo";
import {selectComplete, selectValueComment} from "../redux/selectors/todo";


function TextAreaComment(props) {
        return <textarea
            placeholder="write your comment for note"
            value={props.comment}
            onChange={(event)=> props.edit(event.target.value)}
            className="textAreaComment"
            rows="5"
            disabled={props.complete}
        >value</textarea>
}

const mapStateToProps = (state) => ({
        complete: selectComplete(state),
        comment: selectValueComment(state),
})

const mapDispatchToProps = (dispatch) => ({
        edit: () => dispatch(editComment())
})

export default connect(mapStateToProps, mapDispatchToProps)(TextAreaComment);




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

