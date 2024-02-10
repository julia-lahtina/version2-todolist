import React from 'react';

export type TitlePropsType = {
    title: string
}
export const Title = ({title}: TitlePropsType) => {
    return (
        <h3>{title}</h3>
    );
};
