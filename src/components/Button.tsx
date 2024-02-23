import React from 'react';

type ButtonPropsType = {
    buttonName: string
    callBack: () => void
}
export const Button = ({buttonName, callBack}: ButtonPropsType) => {

    const handleClick = () => {
        callBack()
    }

    return (
        <button onClick={handleClick}>{buttonName}</button>
    );
};
