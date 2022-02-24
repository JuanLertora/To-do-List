import React from "react";
import { useState } from "react";

export const TaskCreator = props =>{

    const [newTaskName, setNewTaskName] = useState('')


    function updateNewTaksValue(event){
        setNewTaskName(event.target.value)
    }

    function CreateNewTaks(){
        props.callback(newTaskName)
        setNewTaskName('')
    }

    


    return (
        <div className="my-1">
            <input
            type='text'
            className="form-control"
            value={newTaskName}
            onChange={updateNewTaksValue}
            />
            <button className="btn btn-primary mt-1" onClick={CreateNewTaks}>
                Agregar
            </button>

        </div>
    )
}