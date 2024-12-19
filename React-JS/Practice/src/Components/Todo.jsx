import React, { useState } from 'react';

const Todo = () => {
    let [todos, setTodos] = useState([]);
    let [task, setTask] = useState('');

    function addTask() {
        if (task.trim() !== '') {
            setTodos([...todos, { text: task, done: false }]);
            setTask('');
        }
    }

    function handleChange(event) {
        setTask(event.target.value);
    }

    function markDone(index) {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        setTodos(newTodos);
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
                        return (
                            <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                                {todo.text}
                                <button onClick={() => markDone(index)}>
                                    {todo.done ? 'Undo' : 'Done'}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Todo;
