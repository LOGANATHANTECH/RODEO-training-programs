import "./css/SingleToDoCard.css"
import React, { useState } from 'react';

function Card() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);  

  function GetTask(event) {
    setTask(event.target.value);
  }

  function HandleAdd() {
    if (task.trim() === '') return; 
    setTasks([...tasks, task]);     
    setTask('');       
  }

  return (
    <div className="card">
      <div className="cardTop">
        <p>Today</p>
      </div>
      <ol>
        {tasks.map((t, index) => (
          <li key={index}><p>{t}</p><button id="DoMoreBtn">^</button></li>   
        ))}
      </ol>
      <input
        className="textarea"
        type="text"
        name="task"
        value={task}
        onChange={GetTask}
        placeholder="+ Add a Task"
      />
      <button type="submit" onClick={HandleAdd}>Add</button>
    </div>
  );
}

export default Card;



