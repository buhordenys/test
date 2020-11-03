import { v4 as uuidv4 } from 'uuid';
import {ADD_NEW_CATEGORY, DELETE_CATEGORY, CHANGE_CATEGORY} from "../actions/category";


export const initialStateCategory = uuidv4()
export const stateIdNewCategory = uuidv4()

const initialState = {
    selectedCategory: initialStateCategory,
    categories:  [
        {id: stateIdNewCategory, title:'+ add your category'},
        {id: initialStateCategory, title:'Home'},
    ]
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CATEGORY: {
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload,
                ]
            }
        }
        case DELETE_CATEGORY: {
            return {
                ...state,
                selectedCategory: stateIdNewCategory,
                categories: state.categories.filter(note => note.id !== state.selectedCategory)
            }
        }
        case CHANGE_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        default: {
            return state
        }
    }

}