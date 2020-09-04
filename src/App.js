import React from 'react';
import TaskList from './Components/TaskList.js';
import './App.css';

function App() {
    let arrNote = [
        { id: 1, complete: false, title: 'note one'},
        { id: 2, complete: false, title: 'note two'},
        { id: 3, complete: false, title: 'note three'},
    ];

  return (
    <div className="App">
      <TaskList arrNote={arrNote}/>
    </div>
  );
}

export default App;
