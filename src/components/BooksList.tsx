import React from 'react';
import {Book} from './Book';
import {BooksType} from '../App';

export const BooksList = ({books, deleteBook, changeStatus}: BooksType) => {
    return (
        <Book changeStatus={changeStatus} deleteBook={deleteBook} books={books}/>
    );
};
