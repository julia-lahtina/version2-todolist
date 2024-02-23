import React, {ChangeEvent} from 'react';
import {BooksType} from '../App';

export const Book = ({books, deleteBook, changeStatus}: BooksType) => {
    return (
        <ul>
            {books.map(b => {

                const handleChangeDelete = () => {
                    deleteBook(b.id)
                }

                const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
                    changeStatus(e.currentTarget.checked, b.id)
                }

                return (
                    <li key={b.id}>
                        <input onChange={handleChangeCheckbox} checked={b.isRead} type="checkbox"/>
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
