import React from "react";
import FormCategories from "./FormCategories";
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';

//todo не могу понять, как добавить картинку в проект
function TaskList() {
    return (
        <div className="FormCategories">
            <span>
                <CollectionsBookmarkOutlinedIcon
                    fontSize="large"
                    alt="..ups..."
                    className='logoTodo'
                />
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