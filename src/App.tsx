import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

export type FilterTasksType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    function removeTask(id: number) {
        let tasksFiltered = tasks.filter(task => task.id !== id)
        setTasks(tasksFiltered)
    }


    let [filterTasks, setFilterTasks] = useState<FilterTasksType>("all")
    let tasksTodoList = tasks

    if (filterTasks === "active") {
        tasksTodoList = tasks.filter(t => !t.isDone)
    }
    if (filterTasks === "completed") {
        tasksTodoList = tasks.filter(t => t.isDone)
    }

    function changeTasks (value: FilterTasksType) {
        setFilterTasks(value)
    }

    return (
        <div className="App">
            <TodoList tasks={tasksTodoList} changeTasks={changeTasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
