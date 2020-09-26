import React from "react";
import SelectCategory from "./SelectCategory";
import Todos from "./Todos";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import {withStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const StyleButton = withStyles({
    root: {
        minWidth: 25,
        textTransform: "none",
        paddingLeft: 8,
    }
})(Button)

class FormCategories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: 'Home'
        }
    }

   selectCategory = (value) => {
       this.setState (
           {
               selectedCategory: value
           }
       )
    }

    /*

    */


    render() {
        return (
            <div>
                <span className="spanCategory">
                    <SelectCategory
                        selectCategory={this.selectCategory}
                        newCat={this.state.selectedCategory}
                    />
                    <StyleButton
                        className="edit"
                        size="small"
                        color="secondary"
                        veriant="text"
                        startIcon={<DeleteForeverTwoToneIcon fontSize="medium"/>}
                        onClick={<SelectCategory selectCategory={this.selectCategory}/>} //todo ч-з функцию при клике вкл/выкл удалять категорию
                    >this category
                    </StyleButton>
                </span>
                <Todos selectedCategory={this.state.selectedCategory}/>
            </div>
        )
    }
}

export default FormCategories;