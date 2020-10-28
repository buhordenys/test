import {createSelector} from 'reselect';

export const selectStateCategories = (state) => {
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
        //console.log('1'+selectedCategory)
        return stateCategories.categories.find( (category) => {
            //console.log('2'+JSON.stringify(category))
            return category.id === selectedCategory
        } )?.category
    }
)

export const selectSelectedCategoryTitle = createSelector(
    selectSelectedCategoryFromList,
    (category) => {
        //console.log(category, selectSelectedCategoryFromList)
        return category ? category.title : 'error "THE SELECTOR IS NOT CURRENTLY DESCRIBED"'
    }
)

