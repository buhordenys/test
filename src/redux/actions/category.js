export const addNewCategory = (newCat) => ({
    type: 'ADD-NEW-CATEGORY',
    payload: newCat,
});

export const dellCategory = () => {
    const question = window.confirm("Do you really wont delete category?")
    return question ? {type: 'DELL-CATEGORY'} : {}
};

export const changeCategory = (value) => ({
    type: 'CHANGE-CATEGORY',
    payload: value,
});

export const ADD_NEW_CATEGORY = 'ADD_NEW_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'