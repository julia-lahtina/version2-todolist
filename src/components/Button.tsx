import React from 'react';

export type ButtonPropsType = {
    title: string
    onClickHandler?: () => {}
}
export const Button = ({title}: ButtonPropsType) => {

    const onClickHandler = () => {

    }

    return (
        <button onClick={onClickHandler}>{title}</button>
    );
};
