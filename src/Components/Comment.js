import React from "react";
import TextAreaComment from "./TextAreaComment";

function Comment(props) {
    return (
        <span>
            <button className="comment" onClick={TextAreaComment}>
                Comment
            </button>
        </span>

    )
}

export default Comment;