import React from "react";
import SelectCategory from "./SelectCategory";
import Todos from "./Todos";
import MoreVertIcon from '@material-ui/icons/MoreVert';


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


    render() {
        return (
            <div>
                <span className="spanCategory">
                    <MoreVertIcon/>
                    <SelectCategory
                        selectCategory={this.selectCategory}
                        newCat={this.state.selectedCategory}
                    />
                </span>
                <Todos selectedCategory={this.state.selectedCategory}/>
            </div>
        )
    }
}

export default FormCategories;