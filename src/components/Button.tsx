import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = {
    buttonName: string
    callBack: () => void
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({buttonName, callBack, disabled, className, style}: ButtonPropsType) => {

    const handleClick = () => {
        callBack()
    }

    return (
        <button onClick={handleClick} disabled={disabled} className={className} style={style}>{buttonName}</button>
    );
};
