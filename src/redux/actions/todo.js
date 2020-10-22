export const addTodoAction = (value) => ({
    type: 'ADD-TODO',
    payload: value,
});

export const changeTodo = (value) => ({
    type: 'CHANGE-TODO',
    payload: value,
});

export const deleteTodo = (value) => ({
    type: 'DELETE-TODO',
    payload: value,
});

export const completedTodo = (value) => ({
    type: 'COMPLETE-TODO',
    payload: value,
})

export const editComment = (value) => ({
    type: 'EDIT-COMMENT',
    payload: value,
});

export const ADD_TODO = 'ADD-TODO'
export const CHANGE_TODO = 'CHANGE-TODO'
export const COMPLETE_TODO = 'COMPLETE-TODO'
export const EDIT_COMMENT = 'EDIT-COMMENT'
export const DELETE_TODO = 'DELETE-TODO'