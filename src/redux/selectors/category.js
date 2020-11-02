import {createSelector} from 'reselect';

export const selectStateCategories = (state) => {
    console.log(state)
    return state.categories
}

export const selectSelectedCategory = createSelector(
    selectStateCategories,
    (stateCategories) => stateCategories?.selectedCategory
)

export const selectSelectedCategoryFromList = createSelector(
    selectStateCategories,
    selectSelectedCategory,
    (stateCategories, selectedCategory) => {
        return stateCategories.categories.find( (category) => {
            return category.id === selectedCategory
        } )
    }
)

export const selectSelectedCategoryTitle = createSelector(
    selectSelectedCategoryFromList,
    (category) => {
        console.log(category, selectSelectedCategoryFromList)
        return category ? category.title : 'error "THE SELECTOR IS NOT CURRENTLY DESCRIBED"'
    }
)

