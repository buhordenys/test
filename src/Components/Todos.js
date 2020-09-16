import React from "react";
import List from "./List";
import InputTodo from "./InputTodo";



class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            todoes: {
                [this.props.selectedCategory]:
                    [
                        { id: this.getId(), complete: false, title: 'note one'},
                        { id: this.getId(), complete: false, title: 'note two'},
                        { id: this.getId(), complete: false, title: 'note three'},
                    ],
            }
        }
    }

    //todo перехватывает обновление, если категория уже есть в массиве переданного пропса FormCategories.js(this.state.selectedCategory), то пропускаем добавление нового элемента с задачами, которое ведет за собой переписывание на нового в формате ниже. А в противном случае добавляет новую категорию к нам, с чистим List выбор категорий:
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

    //todo сравнение есть ли такая же категория, какую мы выбрали в FormCategories.js, в нашем стайте или нет
    howUseCategory(el) {
        let arrCategorise = Object.keys(this.state.todoes).valueOf()
        console.log(arrCategorise, el)
        return arrCategorise.find(item => item == el);
    }

    selectTodosCategories = () => {
        return this.state.todoes[this.props.selectedCategory]
    }

    //todo генерирует новые key в перебираемые объкты, для логики React
    getId = () => {
        return ++this.id
    }

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
                            title: value
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
    mapTodoes = (id) => {
        return this.state.todoes[this.props.selectedCategory].map((note) => {
            if(note.id === id) {
                note.complete = !note.complete
            }
            return note
        })
    }

    //todo функция, которая объеденила filterTodoes и mapTodoes. Ее же собственно и передаем дочерним компонентам
    onChange = (id) => {
        this.setState({
            todoes: {
                ...this.state.todoes,
                [this.props.selectedCategory]:this.mapTodoes(id)
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
            }, 10000)
            }
        )
    }

    render() {
        return (
            <div>
                <InputTodo addTodo={this.addTodo}/>
                <List
                    todoes={this.selectTodosCategories()}
                    сheckMark={this.onChange}
                    getId={this.getId}/>
            </div>
        )
    }
}

export default Todos;