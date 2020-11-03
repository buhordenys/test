import { v4 as uuidv4 } from 'uuid';
import {initialStateCategory} from './category'
import {ADD_TODO, CHANGE_TODO, COMPLETE_TODO, EDIT_COMMENT, DELETE_TODO} from "../actions/todo";
import {selectSelectedCategory} from '../selectors/category'
import {ADD_NEW_CATEGORY} from "../actions/category";

const initialState = [
    {
        category: initialStateCategory,
        todos: [
            {
                id: uuidv4(),
                title: 'note one',
                complete: false,
                valueComment: 'test'
            },
            {
                id: uuidv4(),
                title: 'note two',
                complete: false,
                valueComment: ''
            },
            {
                id: uuidv4(),
                title: 'note three',
                complete: false,
                valueComment: ''
            },
        ],
    },
]

export default function todo(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO: {
            return action.payload
        }
        case ADD_NEW_CATEGORY: {
            return [
                ...state,
                {
                    category: action.payload.id,
                    todos: []
                }
            ]
        }
        case CHANGE_TODO:
        case DELETE_TODO:
        case COMPLETE_TODO:
        case EDIT_COMMENT:
            {
                return action.payload
            }

        default: {
            return state
        }
    }
}