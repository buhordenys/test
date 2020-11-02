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
            console.log(state, action.payload.stateTodos)
            let stateTodos = action.payload.stateTodos
            return {
                ...stateTodos,
                todos: [
                    ...stateTodos,
                    {
                        id: uuidv4(),
                        title: action.payload.value,
                        complete: false,
                        valueComment: ''
                    }]

            }
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
        case CHANGE_TODO: {
            return {
                  ...state,
                  title: action.payload.value
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter((todo) => {
                    return todo.id !== action.payload
                })
            }

        }
        case COMPLETE_TODO: {
            return {
                ...state,
                complete: action.payload.value
            }
        }
        case EDIT_COMMENT: {
            return {
                ...state,
                valueComment: action.payload.value
            }
        }
        default: {
            return state
        }
    }
}