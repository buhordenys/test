export const addTodoAction = (value) => ({
    type: 'ADD-TODO',
    payload: value,
});

export const changeTodo = (value, id) => ({
    type: 'CHANGE-TODO',
    payload: {value, id}
});

export const deleteTodo = (id) => ({
    type: 'DELETE-TODO',
    payload: id,
});

export const completedTodo = (value, id) => ({
    type: 'COMPLETE-TODO',
    payload: {value, id}
})

export const editComment = (value, id) => ({
    type: 'EDIT-COMMENT',
    payload: {value, id}
});

export const ADD_TODO = 'ADD-TODO'
export const CHANGE_TODO = 'CHANGE-TODO'
export const COMPLETE_TODO = 'COMPLETE-TODO'
export const EDIT_COMMENT = 'EDIT-COMMENT'
export const DELETE_TODO = 'DELETE-TODO'