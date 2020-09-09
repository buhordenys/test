import React from 'react'
import SelectCategory from "./SelectCategory";

class TextAreaComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [
                {}
            ]
        }
    }

    //todo Как правильно передать фргументы из функции, которая в другой ветке, в класс?
    arrTextAreaComment() {
        let newArr = [...this.state.comments, {
            id: this.state.comments.length + 1,
            complete: true,
            category: 'SelectCategory.arrCategory.category',
            list: props.title,
            value: '',
        }]
        this.setState({
            comment: newArr
        })
    }

    onBlur = function() {

    }

    render() {
        return <textarea
            className="textAreaComment"
            onChange={this.onBlur}
        />
    }
}


export default TextAreaComment;