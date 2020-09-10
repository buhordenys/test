import React from 'react'
import SelectCategory from "./SelectCategory";

let style = {
    see: { display: 'block' },
    hide: { display: 'none' }
}


class TextAreaComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
        }
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
        /*if (style.hide) {
            style.see
        } else if (style.see) {
            style.hide
        }*/
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
                    style={style.hide}
                />
            </div>
        )
    }

}


export default TextAreaComment;