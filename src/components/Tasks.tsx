import React from 'react';

export const Tasks = () => {
    return (
        <ul>
            <li><input type="checkbox" checked/> <span>HTML&CSS</span></li>
            <li><input type="checkbox" checked/> <span>JS</span></li>
            <li><input type="checkbox"/> <span>React</span></li>
        </ul>
    );
};
