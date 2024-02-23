import React from 'react';
import {BooksType} from '../App';

export const Book = ({books, deleteBook}: BooksType) => {
    return (
        <ul>
            {books.map(b => {

                const handleChangeDelete = () => {
                    deleteBook(b.id)
                }

                return (
                    <li key={b.id}>
                        <input checked={b.isRead} type="checkbox"/>
                        <span>{b.bookName}</span>
                        <span onClick={handleChangeDelete}
                              className={'delete-book'}>
                            <em>  ...удалить из списка</em>
                        </span>
                    </li>
                )
            })}
        </ul>
    );
};
