import React from 'react';
import {Task} from "./Task";
import {TasksType} from "./TodoList";

export const Tasks = ({tasks}: TasksType) => {
    return (
        <ul>
            {tasks.map(task => {
                return <Task title={task.title} isChecked={task.isDone}/>
            })}
        </ul>
    );
};
