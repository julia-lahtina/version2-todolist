import React from 'react';
import {Task} from "./Task";
import {TasksPropsType, TasksType} from "./TodoList";

export const Tasks = ({tasks, removeTask}: TasksType) => {
    return (
        <ul>
            {tasks.map((task: TasksPropsType) => {
                return (
                    <div className={"remove"}>
                        <Task key={task.id} title={task.title} isChecked={task.isDone}/>
                    </div>
                )
            })}
        </ul>
    );
};
