import React from 'react';
import './App.css';
//importing components



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: '',
      toDoList: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleChange(event){
    this.setState({
      userInput:event.target.value,
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState(state=>({
      toDoList: [...state.toDoList, state.userInput], //cant use push, treat as if immutable!
    }))
  }

  deleteTask(task){
    let myTasks = [...this.state.toDoList];
    let indexOfDelete = myTasks.indexOf(task);
    myTasks.splice(indexOfDelete,1);
    this.setState({
      toDoList: myTasks,
    })
  }

  render(){
    return (
      <div>
        <header>
          <h1>To Do List</h1>
        </header>
        <Form input = {this.state.userInput} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />
        <List tasks = {this.state.toDoList} deleteTask = {this.deleteTask} />
      </div>
    )
  }
}

const Form = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
        <input type='text' value={props.input} onChange = {props.handleChange} />
        <button type = 'submit'>Add Task</button>
      </form>
    </div>
  )
}


const List = (props) => {
  let tasks = props.tasks;
  let tasksHTML = tasks.map(task => 
    <div className = 'task-item'>
      <h3 key={task}> {task} </h3>
      <button onClick = {() => {props.deleteTask(task)}}>Delete Task</button>
    </div>
   );
  return (
    <div>
      {tasksHTML}
    </div>
  )
}

export default App;
