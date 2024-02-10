import React from 'react';
import {Tasks} from "./Tasks";
import {Title} from "./Title";
import {Button} from "./Button";

export const TodoList = () => {
    return (
        <div>
            <Title title={"What to learn"}/>

            <input type="text"/>
            <Button title={"+"} callBack={()=>{}}/>

            <Tasks/>

            <Button title={"All"} callBack={()=>{}}/>
            <Button title={"Active"} callBack={()=>{}}/>
            <Button title={"Completed"} callBack={()=>{}}/>
        </div>
    );
};
