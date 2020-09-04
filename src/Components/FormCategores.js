import React from "react";
import List from "./List";
import Note from "./Note";
import Category from "./Category";


function FormCategores(props) {
    return (
        <div>
            <Category />
            <Note />
            <List props={props}/>
        </div>

    )
}

export default FormCategores;