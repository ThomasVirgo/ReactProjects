import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [count, setCounter] = useState(5);
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState('');

  console.log(tasks);

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //prevents the page from reloading when the submit button is clicked
    setTasks([...tasks, userInput]); //cannot use push, have to create new tasks, hence use spread ...
  }


  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick = {() => setCounter(count + 1)} >Click Me pleasio!</button>
      <p>Current count is: {count}</p>
      <Form userInput={userInput} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <p>User input is: {userInput}</p>
    </div>
  )
}


const Form = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <input type='text' value = {props.userInput} onChange = {props.handleChange}></input>
      <button type = 'submit'>Add Task</button>
    </form>
  )
}

export default App;

