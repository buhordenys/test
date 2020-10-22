import React from "react";
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import SelectCategory from "./SelectCategory";
import Todos from "./Todos";

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
                <span className="spanCategory">
                    <SelectCategory />
                </span>
                    <Todos />
            </div>
        </div>
    )
}

export default TaskList;