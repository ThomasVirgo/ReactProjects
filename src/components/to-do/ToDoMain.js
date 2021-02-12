import React, { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';


const ToDo = (props) => {
    const [tasks, setTasks] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents the page from reloading when the submit button is clicked
        setTasks([...tasks, userInput]); //cannot use push, have to create new tasks, hence use spread ...
    }

    const clearInput = (event) => {
        event.preventDefault();
        setUserInput('');
    }

    const deleteTask = (task) => {
        const deleteIndex = tasks.indexOf(task);
        let currentTasks = [...tasks];
        currentTasks.splice(deleteIndex,1);
        setTasks(currentTasks);
    }

    return (
        <div id = 'to-do-list' className = 'todo-container'>
            <Form userInput={userInput} handleChange={handleChange} handleSubmit={handleSubmit} clearInput={clearInput}/>
            <List tasks={tasks} deleteTask={deleteTask}/>
        </div>
    )
}

export default ToDo;