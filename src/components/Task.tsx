import React from 'react';
import {TasksPropsType} from "./TodoList";
import {Button} from "./Button";

type TaskPropsType = {
    task: TasksPropsType
    removeTask: (id: number) => void
}

export const Task = ({task, removeTask}: TaskPropsType) => {
    return (
        <li>
            <input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
            <Button title={"✖️"} callBack={() => removeTask(task.id)}/>
        </li>
    );
};
