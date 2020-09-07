import React from "react";
import FormCategories from "./FormCategories";

function TaskList() {
    return (
        <div className="FormCategories">
            <span>
                <h1>Add your to-do</h1>
                <strong>What do you want to get done today?</strong>
            </span>

            <FormCategories />
        </div>
    )
}

export default TaskList;