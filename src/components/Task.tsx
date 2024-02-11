import React from 'react';
import {TasksPropsType} from "./TodoList";

type TaskPropsType = {
    task: TasksPropsType
    removeTask: (id: number) => void
}

export const Task = ({task, removeTask}: TaskPropsType) => {
    return (
            <li>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => {removeTask(task.id)}}>✖️
                </button>
            </li>
    );
};
