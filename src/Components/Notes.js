import React from "react";
import List from "./List";
import InputNote from "./InputNote";



class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            todoes: [
                { id: this.getId(), complete: false, title: 'note one'},
                { id: this.getId(), complete: false, title: 'note two'},
                { id: this.getId(), complete: false, title: 'note three'},
            ],
        }
    }

    getId = () => {
        return ++this.id
    }

    addTodo = (value) => {
        this.setState(
            {
                todoes: [
                    ...this.state.todoes,
                    {
                        id: this.getId(),
                        complete: false,
                        title: value}
                ]
            })
    }

    filterTodoes = (id) => {
        return this.state.todoes.filter(note => note.id !== id)
    }

    mapTodoes = (id) => {
        return this.state.todoes.map((note) => {
            if(note.id === id) {
                note.complete = !note.complete
            }
            return note
        })
    }

    onChange = (id) => {
        this.setState({
            todoes: this.mapTodoes(id)
        },
            () => {
            setTimeout(() => {
                this.setState({
                    todoes: this.filterTodoes(id)
                })
            }, 5000)
            }
        )
    }
//todo change all note(s) -> todo(es)
    render() {
        return (
            <div>
                <InputNote addTodo={this.addTodo}/>
                <List todoes={this.state.todoes} сheckMark={this.onChange} />
            </div>
        )
    }
}

export default Notes;