import React from 'react';
import {Task} from "./Task";

export const Tasks = () => {
    return (
        <ul>
            <Task title={"HTML&CSS"} isChecked={true}/>
            <Task title={"JS"} isChecked={true}/>
            <Task title={"React"} isChecked={false}/>
        </ul>
    );
};
