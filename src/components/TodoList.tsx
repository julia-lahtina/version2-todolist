import React from 'react';
import {Tasks} from "./Tasks";
import {Title} from "./Title";

export const TodoList = () => {
    return (
        <div>
            <Title title={"What to learn"}/>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <Tasks/>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};
