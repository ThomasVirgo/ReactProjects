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
  }

  handleChange(event){
    this.setState({
      userInput:event.target.value,
    });
  }

  render(){
    return (
      <div>
        <header>
          <h1>To Do List</h1>
        </header>
        <Form input = {this.state.userInput} handleChange = {this.handleChange} />
      </div>
    )
  }
}

const Form = (props) => {
  return (
    <div>
      <form>
        <input type='text' value={props.input} onChange = {props.handleChange} />
        <button type = 'submit'>Add Task</button>
      </form>
      
      <p>The input is: {props.input}</p>
    </div>
  )
}

export default App;
