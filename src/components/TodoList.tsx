import React from 'react';
import {Tasks} from "./Tasks";
import {Title} from "./Title";
import {Button} from "./Button";

export type TasksType = {
    tasks: Array<TasksPropsType>
}

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = ({tasks}: TasksType) => {
    return (
        <div>
            <Title title={"What to learn"}/>

            <input type="text"/>
            <Button title={"+"} callBack={()=>{}}/>

            <Tasks tasks={tasks}/>

            <Button title={"All"} callBack={()=>{}}/>
            <Button title={"Active"} callBack={()=>{}}/>
            <Button title={"Completed"} callBack={()=>{}}/>
        </div>
    );
};
