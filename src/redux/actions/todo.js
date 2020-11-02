import React from 'react';
import {selectSelectedCategory} from "../selectors/category";
import {v4 as uuidv4} from "uuid";


export const ADD_TODO = 'ADD-TODO'
export const CHANGE_TODO = 'CHANGE-TODO'
export const COMPLETE_TODO = 'COMPLETE-TODO'
export const EDIT_COMMENT = 'EDIT-COMMENT'
export const DELETE_TODO = 'DELETE-TODO'

export const addTodoAction = (value) => {
    console.log(value)
    return (dispatch, getState) => {
        const state = getState()
        const  selectCategory = selectSelectedCategory(state)
        console.log(state.todos, selectCategory)

        return state.todos.forEach((stateTodos) => {
            console.log(stateTodos.category, selectCategory)
            if (stateTodos.category === selectCategory) {
                return (
                    dispatch({
                        type: ADD_TODO,
                        payload: {stateTodos, value},
                    })
                )
            }
            //todo return - ?
        })
    }
};

export const changeTodo = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        return state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return stateTodos.todos.map((todo) => {
                    if (todo.id === id) (
                        dispatch({
                            type: CHANGE_TODO,
                            payload: value,
                        })
                    )
                })
            }
            //todo return - ?
        })
    }
};

export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        return state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                dispatch({
                    type: DELETE_TODO,
                    payload: id,
                })
            }
        })
            //todo return - ?
    }
};


export const completedTodo = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        return state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return stateTodos.todos.map((todo) => {
                    if (todo.id === id) (
                        dispatch({
                            type: COMPLETE_TODO,
                            payload: {value, id}
                        })
                    )
                })
            }
            //todo return - ?
        })
    }
};

export const editComment = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        return state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return stateTodos.todos.map((todo) => {
                    if (todo.id === id) (
                        dispatch({
                            type: EDIT_COMMENT,
                            payload: {value, id}
                        })
                    )
                })
            }
            //todo return - ?
        })
    }
};