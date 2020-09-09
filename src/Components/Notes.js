import React from "react";
import List from "./List";


class Notes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todoes: [
                { id: 1, complete: false, title: 'note one'},
                { id: 2, complete: false, title: 'note two'},
                { id: 3, complete: false, title: 'note three'},
            ] }
    }

    filterTodoes = (id) => {
        return this.state.todoes.filter(note => note.id !== id)
    }

    mapTodoes = (id) => {
        return this.state.todoes.map((note) => {
            if(note.id === id) {
                note.complete = !note.complete
            }
        })
    }

    onChange(id) {
        this.setState({
            todoes: mapTodoes(id)
        },
            () => {
            setTimeout(() => {
                this.setState({
                    todoes: filterTodoes(id)
                })
            })
            }
        )
    }

    render() {
        return (
            <div>
                <input className="noteInput" type="text"></input>
                <button type="submit">Add to-do</button>
                <List arrNote={this.state} сheckMark={this.onChange()} />
            </div>
        )
    }
}

export default Notes;