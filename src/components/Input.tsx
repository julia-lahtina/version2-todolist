import React, {ChangeEvent} from 'react';

export type InputPropsType = {
    inputType: string
    newValue: string
    setNewInputValue: (newValue: string) => void
}
export const Input = ({inputType, setNewInputValue, newValue}: InputPropsType) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewInputValue(e.currentTarget.value)
    }
    console.log(newValue)
    return (
        <input value={newValue} onChange={handleChange} type={inputType}/>
    );
};
