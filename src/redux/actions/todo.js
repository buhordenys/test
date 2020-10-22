export const addTodoAction = (value) => ({
    type: 'ADD-TODO',
    payload: value,
});

export const changeTodo = () => ({
    type: 'CHANGE-TODO'
});

export const selectTodo = () => ({
    type: 'SELECT-TODO'
});

export const createComment = () => ({
    type: 'EDIT-COMMENT'
});

export const ADD_TODO = 'ADD-TODO'
export const CHANGE_TODO = 'CHANGE-TODO'
export const SELECT_TODO = 'SELECT-TODO'
export const EDIT_COMMENT = 'EDIT-COMMENT'