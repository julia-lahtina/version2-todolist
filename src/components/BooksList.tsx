import React from 'react';
import {Book} from './Book';
import {BooksType} from '../App';

export const BooksList = ({books, deleteBook}: BooksType) => {
    return (
        <Book deleteBook={deleteBook} books={books}/>
    );
};
