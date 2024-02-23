import React from 'react';
import {Book} from './Book';
import {BooksType} from '../App';

export const BooksList = ({books}: BooksType) => {
    return (
        <Book books={books}/>
    );
};
