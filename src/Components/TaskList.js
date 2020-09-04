import React from "react";
import FormCategores from "./FormCategores";

function TaskList(props) {
    return (
        <div class="FormCategores">
            Task List
            <FormCategores props={props}/>
        </div>
    )
}

export default TaskList;