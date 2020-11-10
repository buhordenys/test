import React, {useCallback} from "react";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from 'react-redux';
import {addNewCategory, deleteCategory, changeCategory} from "../redux/actions/category";
import {selectSelectedCategoryFromList} from "../redux/selectors/category";
import {stateIdNewCategory} from "../redux/reducers/category";


const StyleButton = withStyles({
    root: {
        minWidth: 25,
        textTransform: "none",
        paddingLeft: 8,
    }
})(Button)

const SelectCategory = () => {

    const selectedCategory = useSelector((state) => selectSelectedCategoryFromList(state))
    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    const addNewCategories = useCallback((value) => dispatch(addNewCategory(value)), [dispatch])
    const deleteCategories = useCallback(() => dispatch(deleteCategory()), [])
    const changeCategories = useCallback((categoryId) => dispatch(changeCategory(categoryId)), [dispatch])

    const addCategory = (event) => {
        const categoryId = event.target.value
        if (categoryId===stateIdNewCategory) {
            const newCat = prompt('Add your new Category: ')
            addNewCategories(newCat)
        } else {
            changeCategories(categoryId)
        }
    }

    const dellCategory = () => {
        const question = window.confirm("Do you really wont delete category?")
        if (question) {
            deleteCategories()
        }
    }

    return (
        <div>
            <select
                value={selectedCategory.id}
                onChange={addCategory}
                className='selectCategory'
            >
                {
                    categories.map( (category) => {
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

export default SelectCategory;