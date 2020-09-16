import React from "react";


class SelectCategory extends React.Component {
    constructor(props) {
        super(props)
        this.id = 0
        this.state = {
            categories:  ['+ add your category', 'Home', 'Work']
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
                    value
                ]
            })
    }


    render() {
        return (
            <div>
                <select onChange={this.props.selectCategory}>
                    {
                        this.state.categories.map( (category) => {
                                return (
                                    <>
                                    <option value={category}>{category}</option>
                                    </>
                                )
                            }
                        )
                    }
                </select>
            </div>
        )
    }
}

export default SelectCategory;