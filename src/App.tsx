import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {

    const tasks = [
        {id:1, title: "HTML&CSS", isDone: true},
        {id:2, title: "JS", isDone: true},
        {id:3, title: "React", isDone: false},
    ]

    return (
        <div className="App">
            <TodoList tasks={tasks}/>
        </div>
    );
}

export default App;
