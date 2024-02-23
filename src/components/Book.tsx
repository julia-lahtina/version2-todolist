import React from 'react';
import {BooksType} from '../App';

export const Book = ({books}: BooksType) => {
    return (
        <ul>
            {books.map(b => {
                return (
                    <li key={b.id}>
                        <input checked={b.isRead} type="checkbox"/>
                        <span>{b.bookName}</span>
                        <span className={'delete-book'}><em>  ...удалить из списка</em></span>
                    </li>
                )
            })}
        </ul>
    );
};
