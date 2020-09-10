import React from "react";
import SelectCategory from "./SelectCategory";
import Todos from "./Todos";


class FormCategories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCategory: 'Home'
        }
    }
   selectCategory = (event) => {
        this.setState (
            {
            selectedCategory: event.target.value
        })
    }

    render() {
        return (
            <div>
                <SelectCategory selectCategory={this.selectCategory}/>
                <Todos selectedCategory={this.state.selectedCategory}/>
            </div>
        )
    }
}

export default FormCategories;