import React, {KeyboardEvent, useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Button} from './components/Button';
import {Input} from './components/Input';
import {BooksList} from './components/BooksList';

export type BooksType = {
    books: Array<BookPropsType>
    deleteBook: (BookId: string) => void
    changeStatus: (status: boolean, id: string) => void
}

export type BookPropsType = {
    id: string
    bookName: string
    isRead: boolean
}

type FilterPropsType = 'все' | 'прочитанные' | 'непрочитанные'

function App() {

    const [books, setBooks] = useState<BookPropsType[]>([
        {id: v1(), bookName: 'Преступление и наказание', isRead: true},
        {id: v1(), bookName: 'Мертвые души', isRead: true},
        {id: v1(), bookName: 'Человек в футляре', isRead: true},
        {id: v1(), bookName: 'Война и мир', isRead: false},
        {id: v1(), bookName: 'Горе от ума', isRead: true},
        {id: v1(), bookName: 'Мастер и маргарита', isRead: false},
        {id: v1(), bookName: 'Капитанская дочка', isRead: false},
        {id: v1(), bookName: 'Маленький принц', isRead: true},
    ])
    const [newInputValue, setNewInputValue] = useState('')
    const [filter, setFilter] = useState<FilterPropsType>('все')
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)


    const addBook = () => {
        const newBook = {
            id: v1(),
            bookName: newInputValue,
            isRead: false
        };
        setBooks([newBook, ...books]);
        setNewInputValue('')
    }
    const deleteBook = (BookId: string) => {
        const undeletedBooks = books.filter(b => b.id !== BookId);
        setBooks(undeletedBooks)
    }

    const changeFilterBooks = (filter: FilterPropsType) => {
        setFilter(filter);
    }
    const filterBooks = (filter: FilterPropsType) => {
        let filteredBooks: Array<BookPropsType> = [];
        filter === 'прочитанные'
            ? filteredBooks = books.filter(b => b.isRead)
            : filter === 'непрочитанные'
                ? filteredBooks = books.filter(b => !b.isRead)
                : filteredBooks = books;

        return filteredBooks;
    }

    const booksFilter: Array<BookPropsType> = filterBooks(filter);

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addBook()
        }
    }


    const changeStatus = (status: boolean, id: string) => {
        const newBookStatus = books.map(b => b.id === id ? {...b, isRead: status} : b);
        setBooks(newBookStatus);
    }

    const collapsedBooks = () => {

    }


    return (
        <div>
            <Input onKeyPress={onKeyPress} newValue={newInputValue} setNewInputValue={setNewInputValue}
                   inputType={'text'}/>
            <Button buttonName={'Добавить книгу'} callBack={addBook}/>
            <div><Button buttonName={'Close'} callBack={collapsedBooks}/></div>
            <h2>Список книг:</h2>
            <BooksList books={booksFilter} deleteBook={deleteBook} changeStatus={changeStatus}/>
            <Button buttonName={'Все книги'} callBack={() => changeFilterBooks('все')}/>
            <Button buttonName={'Прочитанные книги'} callBack={() => changeFilterBooks('прочитанные')}/>
            <Button buttonName={'Непрочитанные книги'} callBack={() => changeFilterBooks('непрочитанные')}/>
        </div>
    );
}

export default App;
