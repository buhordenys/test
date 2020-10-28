import { v4 as uuidv4 } from 'uuid';
import {initialStateCategory} from './category'
import {ADD_TODO, CHANGE_TODO, COMPLETE_TODO, EDIT_COMMENT, DELETE_TODO} from "../actions/todo";
import {selectSelectedCategory} from '../selectors/category'

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
            console.log(state)
            return state.map((stateTodos) => {
                console.log(stateTodos, selectSelectedCategory(state))
                if(stateTodos.category === selectSelectedCategory(state)) {
                    return {
                        ...stateTodos,
                        todos: stateTodos.todos.map((todo) => {
                            console.log(todo)
                            return [
                                ...todo,
                                {
                                    id: uuidv4(),
                                    title: action.payload,
                                    complete: false,
                                    valueComment: ''
                                }
                            ]
                        })
                    }
                }
                return stateTodos
            })
        }
        case CHANGE_TODO: {
            return state.map((stateTodos) => {
                if(stateTodos.category === selectSelectedCategory(state)) {
                  return {
                      ...stateTodos,
                      todos: stateTodos.todos.map((todo) => {
                          if(todo.id === action.payload.id) {
                              return {
                                  ...todo,
                                  title: action.payload.value
                              }
                          }
                          return todo
                      })
                  }
                }
                return stateTodos
            })
        }
        case DELETE_TODO: {
            return state.map((stateTodos) => {
                if(stateTodos.category === selectSelectedCategory(state)) {
                    return {
                        ...stateTodos,
                        todos: stateTodos.todos.filter((todo) => {
                            return todo.id !== action.payload
                        })
                    }
                }
                return stateTodos
            })

        }
        case COMPLETE_TODO: {
            return state.map((stateTodos) => {
                if(stateTodos.category === selectSelectedCategory(state)) {
                    return {
                        ...stateTodos,
                        todos: stateTodos.todos.map((todo) => {
                            if(todo.id === action.payload.id) {
                                return {
                                    ...todo,
                                    complete: action.payload.value
                                }
                            }
                            return todo
                        })
                    }
                }
                return stateTodos
            })
        }
        case EDIT_COMMENT: {
            return state.map((stateTodos) => {
                if(stateTodos.category === selectSelectedCategory(state)) {
                    return {
                        ...stateTodos,
                        todos: stateTodos.todos.map((todo) => {
                            if(todo.id === action.payload.id) {
                                return {
                                    ...todo,
                                    valueComment: action.payload.value
                                }
                            }
                            return todo
                        })
                    }
                }
                return stateTodos
            })
        }
        default: {
            return state
        }
    }
}