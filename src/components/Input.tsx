import React, {ChangeEvent, KeyboardEvent} from 'react';

export type InputPropsType = {
    inputType: string
    newValue: string
    setNewInputValue: (newValue: string) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}
export const Input = ({setNewInputValue, newValue, inputType, onKeyPress}: InputPropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewInputValue(e.currentTarget.value)
    }

    const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress(e)
    }

    return (
        <input value={newValue} onChange={handleChange} onKeyDown={handleOnKeyDown} type={inputType}/>
    );
};
