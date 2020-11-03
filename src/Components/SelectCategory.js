import React from "react";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux';
import {addNewCategory, deleteCategory, changeCategory} from "../redux/actions/category";
import {selectSelectedCategoryTitle, selectSelectedCategoryFromList} from "../redux/selectors/category";
import {stateIdNewCategory} from "../redux/reducers/category";


const StyleButton = withStyles({
    root: {
        minWidth: 25,
        textTransform: "none",
        paddingLeft: 8,
    }
})(Button)

const SelectCategory = (props) => {

    const addCategory = (event) => {
        const categoryId = event.target.value
        if (categoryId===stateIdNewCategory) {
            const newCat = prompt('Add your new Category: ')
            props.addNewCategory(newCat)
        } else {
            props.changeCategory(categoryId)
        }
    }

    const dellCategory = () => {
        const question = window.confirm("Do you really wont delete category?")
        if (question) {
            props.deleteCategory()
        }
    }

    return (
        <div>
            <select
                value={props.selectedCategory.id}
                onChange={addCategory}
                className='selectCategory'
            >
                {
                    props.categories.map( (category) => {
                        return (
                            <option
                                key={category.id + category.title}
                                value={category.id}
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
                onClick={dellCategory}
            >this category
            </StyleButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedCategory: selectSelectedCategoryFromList(state),
    categories: state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
    addNewCategory: (value) => dispatch(addNewCategory(value)),
    deleteCategory: () => dispatch(deleteCategory()),
    changeCategory: (categoryId) => dispatch(changeCategory(categoryId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);