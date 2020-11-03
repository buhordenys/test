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
        const state = getState()
        const  selectCategory = selectSelectedCategory(state)

        const payload = state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return {
                    ...stateTodos,
                    todos: [
                        ...stateTodos.todos,
                        {
                            id: uuidv4(),
                            title: value,
                            complete: false,
                            valueComment: ''
                        }
                    ]
                }

            }
            return stateTodos
        })

        dispatch({
            type: ADD_TODO,
            payload: payload,
        })
    }
};

export const changeTodo = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        const payload = state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return {
                    ...stateTodos,
                    todos: stateTodos.todos.map((todo) => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                title: value
                            }
                        }
                        return todo
                    })
                }

            }
            return stateTodos
        })

        dispatch({
            type: CHANGE_TODO,
            payload: payload,
        })
    }
};

export const deleteTodo = (id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        const payload = state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return {
                    ...stateTodos,
                    todos: stateTodos.todos.filter((todo) => {
                        return todo.id !== id
                    })
                }
            }
            return stateTodos
        })

        dispatch({
            type: DELETE_TODO,
            payload: payload,
        })
    }
};


export const completedTodo = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        const payload = state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return {
                    ...stateTodos,
                    todos: stateTodos.todos.map((todo) => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                complete: value,
                            }
                        }
                        return todo
                    })
                }
            }
            return stateTodos
        })


        dispatch({
            type: COMPLETE_TODO,
            payload: payload,
        })
    }
};

export const editComment = (value, id) => {
    return (dispatch, getState) => {
        const state = getState()
        const selectCategory = selectSelectedCategory(state)

        const payload = state.todos.map((stateTodos) => {
            if (stateTodos.category === selectCategory) {
                return {
                    ...stateTodos,
                    todos: stateTodos.todos.map((todo) => {
                        if (todo.id === id) {
                            return {
                                ...todo,
                                valueComment: value,
                            }
                        }
                        return todo
                    })
                }
            }
            return stateTodos
        })

        dispatch({
            type: EDIT_COMMENT,
            payload: payload,
        })
    }
};