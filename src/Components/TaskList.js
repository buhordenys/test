import React from "react";
import FormCategories from "./FormCategories";
import "../index.css";


//todo не могу понять, как добавить картинку в проект
function TaskList() {
    return (
        <div className="FormCategories">
            <span>
                <img src={'IT/Projects/image/logoTodo.jpeg'} className='logoTodo'/>
                <h1>Add your to-do</h1>
                <strong className='titleStrong'>What do you want to get done today?</strong>
            </span>

            <div className='formCategories'>
            <FormCategories />
            </div>
        </div>
    )
}

export default TaskList;