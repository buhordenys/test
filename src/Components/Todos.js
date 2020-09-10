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

//todo перехватывает обновление, выбор категорий:
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

    howUseCategory(el) {
        let arrCategorise = Object.keys(this.state.todoes).valueOf()
        console.log(arrCategorise, el)
        return arrCategorise.find(item => item == el);
    }

    selectTodosCategories = () => {
        return this.state.todoes[this.props.selectedCategory]
    }

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

    filterTodoes = (id) => {
        return this.state.todoes[this.props.selectedCategory].filter(note => note.id !== id)
    }

    mapTodoes = (id) => {
        return this.state.todoes[this.props.selectedCategory].map((note) => {
            if(note.id === id) {
                note.complete = !note.complete
            }
            return note
        })
    }

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
            }, 5000)
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