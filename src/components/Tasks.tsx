import React from 'react';
import {Task} from "./Task";
import {TasksPropsType, TasksType} from "./TodoList";

export const Tasks = ({tasks, removeTask}: TasksType) => {
    return (
        <ul>
            {tasks.map((task: TasksPropsType) => {
                return (
                    <div className={"remove"}>
                        <Task removeTask={removeTask} task={task}/>
                    </div>
                )
            })}
        </ul>
    );
};
