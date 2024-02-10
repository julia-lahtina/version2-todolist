import React from 'react';
import {Tasks} from "./Tasks";

export const TodoList = () => {
    return (
        <div>
            <h3>What to learn</h3>
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
