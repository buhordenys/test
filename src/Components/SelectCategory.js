import React from "react";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const StyleButton = withStyles({
    root: {
        minWidth: 25,
        textTransform: "none",
        paddingLeft: 8,
    }
})(Button)

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
            console.log("add")
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
        } else {
            this.props.selectCategory(value)
        }
    }

    dellCategory = () => {
        const value = this.props.newCat

        const question = window.confirm("Do you really wont delete category?")
        if (question) {
            this.setState(
                {
                    categories: this.state.categories.filter(note => note.title !== value)
                }, () => {
                    console.log(this.state.categories)
                    this.props.selectCategory('Add your new Category: ')
                }
            )
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
                <StyleButton
                    className="edit"
                    size="small"
                    color="secondary"
                    veriant="text"
                    startIcon={<DeleteForeverTwoToneIcon fontSize="large"/>}
                    onClick={this.dellCategory} //todo ч-з функцию при клике вкл/выкл удалять категорию
                >this category
                </StyleButton>

            </div>
        )
    }
}

export default SelectCategory;