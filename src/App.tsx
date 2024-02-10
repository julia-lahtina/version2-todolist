import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">

            <h3>What to learn</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked/> <span>JS</span></li>
                <li><input type="checkbox"/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>

        </div>
    );
}

export default App;
