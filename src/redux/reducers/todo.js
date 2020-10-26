import { v4 as uuidv4 } from 'uuid';
import {initialStateCategory} from './category'
import {ADD_TODO, CHANGE_TODO, COMPLETE_TODO, EDIT_COMMENT, DELETE_TODO} from "../actions/todo";

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
                todos: [
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
            return {
                ...state,
                title: action.payload,
            }
        }
        case DELETE_TODO: {
            return {
                ...state,
                todos: state.todos.filter(note => note.id !== action.payload),  //todo ???????
            }
        }
        case COMPLETE_TODO: {
            return {
                ...state,
                todos: state.todos.map((note) => { //todo ???????????
                    if (note.id === action.id) {
                        note.complete = action.value
                    }
                    return note
                }),
            }
        }
        case EDIT_COMMENT: {
            return {
                ...state,
                valueComment: action.value,
            }
        }
        default: {
            return state
        }
    }
}