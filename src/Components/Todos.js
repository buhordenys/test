import React from "react";
import InputTodo from "./InputTodo";
import Item from "./Item";
import {useSelector} from 'react-redux'
import {selectCategoryTodos} from "../redux/selectors/todo";


const Todos = () => {
    const todos = useSelector((state) => selectCategoryTodos(state))

    return (
        <div>
            <InputTodo />
            <ul className='listUl'>
                {
                    todos?.map(todo => {
                        return <Item
                                key={todo.id}
                                todo={todo}
                            />
                    })
                }
            </ul>
        </div>
    )
}

export default Todos;

/*


    //todo перехватывает обновление, если категория уже есть в массиве переданного пропса FormCategories.js(this.state.selectedCategory),
    // то пропускаем добавление нового элемента с задачами, которое ведет за собой переписывание на нового в формате ниже.
    // А в противном случае добавляет новую категорию к нам, с чистим List выбор категорий:
    componentWillReceiveProps(props, context) {
        if (!this.howUseCategory(props.selectedCategory)) {
            this.setState(
                {
                    todoes: {
                        ...this.state.todoes,
                        [props.selectedCategory]: []
                    }
                }
            )
        }
    }

    //todo сравнение есть ли такая же категория, какую мы выбрали в FormCategories.js, в нашем стэйте или нет
    howUseCategory(el) {
        let arrCategorise = Object.keys(this.state.todoes).valueOf()
        return arrCategorise.find(item => item === el);
    }

    selectTodosCategories = () => {
        return this.state.todoes[this.props.selectedCategory]
    }

    //todo генерирует новые key в перебираемые объкты, для логики React

        addTodo = (value) => {
            this.setState(
                {
                    todoes: {
                        ...this.state.todoes,
                        [this.props.selectedCategory]:[
                            ...this.state.todoes[this.props.selectedCategory],
                            {
                                id: this.getId(),
                                complete: false,
                                title: value,
                                valueComment: ''
                            }
                        ]
                    }
                }
            )

        }

        //todo фильтрует массив и возвращает новый массив объектов, но без объкта с данным id (которое, передаеться при вызове ф-ии filterTodoes)
        filterTodoes = (id) => {
            return this.state.todoes[this.props.selectedCategory].filter(note => note.id !== id)
        }

        //todo перебирает массив his.state.todoes и возвращает уже с новый массив с правками, которые прописаны в дочерних компонентах:
        // в данном случае зачеркиват выбранный в checkbox вариант
        mapTodos = ({id, value, key}) => {
            return this.state.todoes[this.props.selectedCategory].map((note) => {
                if(note.id === id) {
                    note[key] = value
                }
                return note
            })
        }

        //todo функция - удаляет заметку, которая объеденила filterTodoes и mapTodoes. Ее же собственно и передаем дочерним компонентам
        onComplete = (id, value) => {
            this.setState({
                todoes: {
                    ...this.state.todoes,
                    [this.props.selectedCategory]:this.mapTodos({id, value, key:'complete'})
                }
            },
                () => {
                setTimeout(() => {
                    this.setState({
                        todoes: {
                            ...this.state.todoes,
                            [this.props.selectedCategory]: this.filterTodoes(id)
                        }
                    })
                }, 5000)
                }
            )
        }
        //todo: здесь можно использовать lodash-библиотеку функцию debounce - она вызывает крайний колбэк, в вызове одной функции в диапазоне заданного времени (время сам задаешь):
        onChange = (id, value) => {
            this.setState({
                todoes: {
                    ...this.state.todoes,
                    [this.props.selectedCategory]: this.mapTodos({id, value, key:'title'})
                }
            })
        }

        addComment = (id, value) => {
            this.setState({
                todoes: {
                    ...this.state.todoes,
                    [this.props.selectedCategory]: this.mapTodos({id, value, key:'valueComment'})
                }
            })
        }
    */
