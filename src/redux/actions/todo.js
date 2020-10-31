import React from 'react';
import {selectSelectedCategory} from "../selectors/category";
import {v4 as uuidv4} from "uuid";


export const ADD_TODO = 'ADD-TODO'
export const CHANGE_TODO = 'CHANGE-TODO'
export const COMPLETE_TODO = 'COMPLETE-TODO'
export const EDIT_COMMENT = 'EDIT-COMMENT'
export const DELETE_TODO = 'DELETE-TODO'

export const addTodoAction = (value) => {
    return (dispatch, getState) => {
        const  selectCategory = selectSelectedCategory(getState)
        console.log(getState.todos, selectCategory)

        return getState.todos.map((stateTodos) => {
            console.log(stateTodos.category, selectCategory)
            if (stateTodos.category === selectCategory) {
                return (
                    dispatch({type: ADD_TODO, payload: value,})
                )
            }
            //todo return - ?
        })
    }
};

export const changeTodo = (value, id) => ({
    type: CHANGE_TODO,
    payload: {value, id}
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const completedTodo = (value, id) => ({
    type: COMPLETE_TODO,
    payload: {value, id}
})

export const editComment = (value, id) => ({
    type: EDIT_COMMENT,
    payload: {value, id}
});