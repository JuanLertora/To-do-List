import React from "react";

export const TaskBanner = props => {
    return (
        <h4 className="bg-primary text-white text-center p-4">Hola {props.LoginUser}, te quedan {props.taskitem.filter(t => !t.done).length} tareas por terminar.
        </h4>
        
    )
}