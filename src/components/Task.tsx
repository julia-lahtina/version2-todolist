import React from 'react';

export type TaskPropsType = {
    title: string
    isChecked: boolean
}
export const Task = ({title, isChecked}: TaskPropsType) => {
    return (
        <li><input type="checkbox" checked={isChecked}/> <span>{title}</span></li>
    );
};
