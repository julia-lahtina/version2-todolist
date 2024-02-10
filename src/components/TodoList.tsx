import React from 'react';
import {Tasks} from "./Tasks";
import {Title} from "./Title";
import {Button} from "./Button";


export type TasksType = {
    tasks: Array<TasksPropsType>
    removeTask: (taskId: number) => void
}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = ({tasks, removeTask}: TasksType) => {
    return (
        <div>
            <Title title={"What to learn"}/>

            <input type="text"/>
            <Button title={"+"}/>

            <Tasks removeTask={removeTask} tasks={tasks}/>

            <Button title={"All"}/>
            <Button title={"Active"}/>
            <Button title={"Completed"}/>
        </div>
    );
};
