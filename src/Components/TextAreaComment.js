import React from 'react'
import SelectCategory from "./SelectCategory";

/*let style = {
    see: { display: 'block' },

    hide: { display: 'none' }
}*/


class TextAreaComment extends React.Component {
    constructor(props) {
        super(props)
        this.hide = 'none'
        this.state = {
            comments: [],
        }
        console.log(this.state)
    }

    inputComment = (value) => {
        this.setState(
            {
                comments: [
                    ...this.state.comments,
                    {
                        id: this.props.getId(),
                        value: value,
                    }
                ]
            }
        )
        this.onBlur()
        console.log(this.state)
    }

    onBlur = function() {
        if (this.hide == 'none') {
            this.hide === 'block'
        } else {
            this.hide === 'none'
        }
    }

    render() {
        return (
            <div>
                <button className="buttonComment" onClick={this.onBlur()}>
                    Comment
                </button>
                <textarea
                    className="textAreaComment"
                    onChange={this.inputComment}
                    style={display:this.hide}
                />
            </div>
        )
    }

}


export default TextAreaComment;