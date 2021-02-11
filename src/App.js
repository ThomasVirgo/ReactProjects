import React, { useState, useEffect } from 'react';
import './App.css';
import NaturalEvents from './components/NaturalEvents';


const App = () => {

  const [count, setCounter] = useState(5);
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    const fetchEventData = async () => {
      const myResponse = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=10&days=10'); //have to use await because fetch returns a promise
      const data = await myResponse.json();
      setEvents(data.events);
      console.log(data.events);
    }
    fetchEventData()
  }, []) //providing an empty array as the dependency means it only executes once when the page loads. If you provide nothing, it will execute on every re-render!


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
    <div>
      <h1>Welcome!</h1>
      <button onClick = {() => setCounter(count + 1)} >Click Me pleasio!</button>
      <p>Current count is: {count}</p>
      <Form userInput={userInput} handleChange={handleChange} handleSubmit={handleSubmit} clearInput={clearInput}/>
      <p>User input is: {userInput}</p>
      <List tasks={tasks} deleteTask={deleteTask}/>
      <NaturalEvents events = {events}/>
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
  const taskElements = props.tasks.map((item, index) => 
    <div key = {item}>
      <h2>{item}</h2>
      <button onClick = {() => props.deleteTask(item)}>Delete Task</button>
    </div>
  )
  return (
    <div>
      {taskElements}
    </div>
  )
}


export default App;

