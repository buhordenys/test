import {createSelector} from 'reselect';

export const selectStateCategories = (state) => {
    return state.categories
}

export const selectSelectedCategory = createSelector(
    selectStateCategories,
    (stateCategories) => stateCategories?.selectedCategory
)

