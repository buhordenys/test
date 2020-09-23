import React from 'react'


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

function SetComment({textareaOff, isOpen, valueComment, thisId, addCommemt}) {
    if (isOpen) {

        return <textarea
                onBlur={textareaOff}
                value={valueComment}
                onChange={(event)=> addCommemt(thisId, event.target.value)}
                className="textAreaComment"
            >{valueComment}</textarea>
    }
    return <></>
}

function CommentoutButton(props) {
    return (
        <button className="buttonCommentOut" onClick={props.onClick}>
            Comment
        </button>
    )
}

function CommentButton(props) {
    console.log(props.valueComment)
    return (
        <button className={props.valueComment.length > 0  ? 'buttonCommentOut' : 'buttonComment'} onClick={props.onClick}>
            Comment
        </button>
    )
}


export default TextAreaComment;