import {combineReducers} from "redux";
import categoriesReducer from "./reducers/category";
import todoReducer from "./reducers/todo"

export default combineReducers({
    categories: categoriesReducer,
    todo: todoReducer,
})