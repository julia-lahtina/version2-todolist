import React from 'react';
import {Tasks} from "./Tasks";
import {Title} from "./Title";
import {Button} from "./Button";
import {FilterTasksType} from "../App";


export type TasksType = {
    tasks: Array<TasksPropsType>
    removeTask: (taskId: number) => void
    changeTasks: (value: FilterTasksType) => void
}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = ({tasks, removeTask, changeTasks}: TasksType) => {
    return (
        <div>
            <Title title={"What to learn"}/>

            <input type="text"/>
            <button>+</button>

            <Tasks changeTasks={changeTasks} removeTask={removeTask} tasks={tasks}/>

            <Button callBack={() => changeTasks} title={"All"}/>
            <Button callBack={() => changeTasks} title={"Active"}/>
            <Button callBack={() => changeTasks} title={"Completed"}/>
        </div>
    );
};
