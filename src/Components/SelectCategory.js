import React from "react";

function SelectCategory() {
    let arrCategory = [
        {}
    ]

    function addSelectCategory() {

    }

    return (
        <div>
            <select /*onchange=""*/ >
                <option onClick={addSelectCategory}>+add category...</option>
            </select>
        </div>

    )
}

export default SelectCategory;