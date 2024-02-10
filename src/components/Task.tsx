import React from 'react';

export type TaskPropsType = {
    title: string
    isChecked: boolean
    removeTask: (taskId: number) => void
}
export const Task = ({title, isChecked, removeTask}: TaskPropsType) => {
    return (
        <>
            <li>
                <input type="checkbox" checked={isChecked}/>
                <span>{title}</span>
            </li>
            <button onClick={() => {}}>✖️</button>
        </>
    );
};
