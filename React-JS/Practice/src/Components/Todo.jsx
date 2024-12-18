import React, { useState } from 'react';

const Todo = () => {
    let [todos, setTodos] = useState(['']);
    let [task, setTask] = useState('');

    function addTask() {
        if (task.trim() !== '') {
            setTodos([...todos, task]);
            setTask('');
        }
    }

    function handleChange(event) {
        setTask(event.target.value);
    }

    return (
        <div>
            <h2 style={{color:"White"}}>To-do list</h2>
            <input 
                type="text" 
                placeholder='Add task' 
                value={task} 
                onChange={handleChange} 
            /> <br />
            <button onClick={addTask}>Add Task</button>
            <ul style={{color:"White", listStyleType:"none"}}>
                {
                    todos.map((todo, index) => {
                        return <li key={index}>{todo}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Todo;
