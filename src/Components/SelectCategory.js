import React from "react";


class SelectCategory extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            categories:  [
                {id: this.id, title:'+ add your category'},
                {id: this.id, title:'Home'},
                {id: this.id, title:'Work'}
                ]
        }
    }

    getId = () => {
        return ++this.id
    }

    addCategory = (value) => {
        this.setState(
            {
                categories: [
                    ...this.state.categories,
                    {
                        id: this.id,
                        title: value
                    }
                ]
            })
    }


    render() {
        return (
            <div>
                <select onChange={this.props.selectCategory} className='selectCategory'>
                    {
                        this.state.categories.map( (category) => {
                                if (category.title) {
                                    return (
                                        <>
                                            <option value={category.title}>{category.title}</option>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <option value={category.title}>{this.addCategory(category.title)}</option>
                                        </>
                                    )
                                }
                            }
                        )
                    }
                </select>
            </div>
        )
    }
}

export default SelectCategory;