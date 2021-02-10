import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [count, setCounter] = useState(5);
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


  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick = {() => setCounter(count + 1)} >Click Me pleasio!</button>
      <p>Current count is: {count}</p>
      <Form userInput={userInput} handleChange={handleChange} handleSubmit={handleSubmit} clearInput={clearInput}/>
      <p>User input is: {userInput}</p>
      <List tasks={tasks}/>
    </div>
  )
}


const Form = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <input type='text' value = {props.userInput} onChange = {props.handleChange}></input>
      <button type = 'submit'>Add Task</button>
      <button onClick = {props.clearInput}>Clear Input</button>
    </form>
  )
}

const List = (props) => {
  const taskElements = props.tasks.map((item, index) => <h2 key = {index}>{item}</h2>)
  return (
    <div>
      {taskElements}
    </div>
  )
}

export default App;

