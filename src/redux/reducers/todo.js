import { v4 as uuidv4 } from 'uuid';
import {initialStateCategory} from './category'
import {ADD_TODO, CHANGE_TODO, EDIT_COMMENT, SELECT_TODO} from "../actions/todo";

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
    }
]

export default function todo(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todes: [
                    ...state,
                    {
                        id: uuidv4(),
                        title: action.payload,
                        complete: false,
                        valueComment: ''
                    }
                ]
            }
        }
        case CHANGE_TODO: {
            return
        }
        case SELECT_TODO: {
            return
        }
        case EDIT_COMMENT: {
            return
        }
        default: {
            return state
        }
    }
}