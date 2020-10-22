import React from "react";


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

    /* todo render() {
        return (
            <div>
                <span className="spanCategory">
                    <SelectCategory
                        selectCategory={this.selectCategory}
                        newCat={this.state.selectedCategory}
                    />
                </span>
                <Todos selectedCategory={this.state.selectedCategory}/>
            </div>
        )
    }*/
}

