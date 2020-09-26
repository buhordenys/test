import React from "react";


class SelectCategory extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            categories:  [
                    {id: this.getId(), title:'+ add your category'},
                    {id: this.getId(), title:'Home'},
                    {id: this.getId(), title:'Work'}
                ]
        }
    }

    getId = () => {
        return ++this.id
    }

    addCategory = (event) => {
        const value = event.target.value
        if (value === '+ add your category') {
            const newCat = prompt('Add your new Category: ')
            this.setState(
                {
                    categories: [
                        ...this.state.categories,
                        {
                            id: this.getId(),
                            title: newCat,
                        }
                    ]
                }, () => this.props.selectCategory(newCat))
        } else if (value === 'delete') {
            const question = window.confirm("Do you really wont delete category?")
            if (question) {
                this.setState(
                    {
                        categories: [
                            ...this.state.categories,
                            this.state.categories.filter(note => note.title !== value)
                        ]
                    }, () => this.props.selectCategory('Home')
                )
            }
        } else {
            this.props.selectCategory(value)
        }
    }

    render() {
        return (
            <div>
                <select
                    value={this.props.newCat}
                    onChange={this.addCategory}
                    className='selectCategory'
                >
                    {
                        this.state.categories.map( (category) => {
                                return (
                                    <option
                                        key={category.id}
                                        value={category.title}
                                    >
                                        {category.title}
                                    </option>
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