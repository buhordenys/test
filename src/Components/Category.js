import React from "react";
import Note from "./Note";

function Category() {
    return (
        <div>
            <select /*onchange=""*/ >
                <option>+add category...</option>
            </select>
            <Note />
        </div>

    )
}

export default Category;