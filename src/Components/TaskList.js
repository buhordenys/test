import React from "react";
import FormCategores from "./FormCategores";

function TaskList() {
    return (
        <div className="FormCategores">
            <span>
                <h1>Add your to-do</h1>
                <strong>What do you want to get done today?</strong>
            </span>

            <FormCategores />
        </div>
    )
}

export default TaskList;