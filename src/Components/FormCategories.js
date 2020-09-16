import React from "react";
import SelectCategory from "./SelectCategory";
import Todos from "./Todos";


class FormCategories extends React.Component {
    constructor(props) {
        super(props)
        this.newCat = ''
        this.state = {
            selectedCategory: 'Home'
        }
    }

   selectCategory = (event) => {
       if (event.target.value === '+ add your category') {
           console.log(event.target.value)
           return this.newCat = prompt('Add your new Category: ')

           //todo выводит prompt в котором вводиться категория, при нажатии:
           // "Ок" -> передаеться value SelectCategory.js в функцию, которая добавляет в this.state.category элемент массива со значением value
           // "Отмена" -> evevnt = 'Home'
       } else {
               this.setState (
                   {
                       selectedCategory: event.target.value
                   })
       }
    }


    render() {
        return (
            <div>
                <SelectCategory selectCategory={this.selectCategory} newCat={this.newCat}/>
                <Todos selectedCategory={this.state.selectedCategory}/>
            </div>
        )
    }
}

export default FormCategories;