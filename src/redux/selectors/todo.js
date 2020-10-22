import {createSelector} from 'reselect'

const stateTodo = (state) => {
    return state.todos
}

export const selectId = createSelector(
    stateTodo,
    (todos) => todos?.id
)

export const selectTitle = createSelector(
    stateTodo,
    (todos) => todos?.title
)

export const selectComplete = createSelector(
    stateTodo,
    (todos) => todos?.complete
)

export const selectValueComment = createSelector(
    stateTodo,
    (todos) => todos?.valueComment
)