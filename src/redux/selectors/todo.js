import {createSelector} from 'reselect'
import {selectSelectedCategory} from "./category";

export const selectStateTodos = (state) => {
    return state.todos
}

export const selectCategoryTodos = createSelector(
    selectStateTodos,
    selectSelectedCategory,
    (stateTodos, selectedCategory) => {
        console.log(stateTodos,selectedCategory)
        return stateTodos.find( (todo) => todo.category === selectedCategory )?.todos
    }
)
/*
export const selectId = createSelector(
    selectCategoryTodos,
    (todos) => todos?.id
)

export const selectTitle = createSelector(
    selectCategoryTodos,
    (todos) => todos?.title
)

export const selectComplete = createSelector(
    selectCategoryTodos,
    (todos) => todos?.complete
)

export const selectValueComment = createSelector(
    selectCategoryTodos,
    (todos) => todos?.valueComment
)*/