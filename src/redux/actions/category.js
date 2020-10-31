import { v4 as uuidv4 } from 'uuid';

export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY'
export const DELETE_CATEGORY = 'DELETE-CATEGORY'
export const CHANGE_CATEGORY = 'CHANGE-CATEGORY'

export const addNewCategory = (title) => ({
    type: ADD_NEW_CATEGORY,
    payload: {title, id: uuidv4()}
});

export const deleteCategory = () => {
    const question = window.confirm("Do you really wont delete category?")
    return question ? {type: DELETE_CATEGORY} : {}
};

export const changeCategory = (categoryId) => ({
    type: CHANGE_CATEGORY,
    payload: categoryId,
});

