import React from "react";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addNewCategory, deleteCategory, changeCategory} from "../redux/actions/category";
import {selectSelectedCategoryTitle} from "../redux/selectors/category";


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
    }

    addCategory = (event) => {
        const value = event.target.value
        if (value === '+ add your category') {
            const newCat = prompt('Add your new Category: ')
            this.props.addNewCategory(newCat)
        } else {
            this.props.changeCategory(value)
        }
    }

    dellCategory = () => {
        const question = window.confirm("Do you really wont delete category?")
        if (question) {
            this.props.deleteCategory()
        }
    }

    render() {
        console.log(this.props.categories.selectedCategory)
        return (
            <div>
                <select
                    value={this.props.categories.selectedCategory}
                    onChange={this.addCategory}
                    className='selectCategory'
                >
                    {
                        this.props.categories.map( (category) => {
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
                    onClick={this.dellCategory}
                >this category
                </StyleButton>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedCategory: selectSelectedCategoryTitle(state),
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
    addNewCategory: () => dispatch(addNewCategory()),
    deleteCategory: () => dispatch(deleteCategory()),
    changeCategory: () => dispatch(changeCategory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);