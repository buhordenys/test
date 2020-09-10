import React from "react";


class SelectCategory extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            categories:  ['Home', 'Work']
        }
    }

    getId = () => {
        return ++this.id
    }

    addCategory = (value) => {
        this.setState(
            {
                categories: [
                    ...this.state.todoes,
                    {
                        id: this.getId(),
                        selected: false,
                        category: value
                    }
                ]
            })
    }


    render() {
        return (
            <div>
                <select onChange={this.props.selectCategory}>
                    {
                        this.state.categories.map( (category) => {
                                return (
                                    <option value={category}>{category}</option>
                                )
                            }
                        )
                    }
                </select>
            </div>
        )
    }
}

export default SelectCategory;