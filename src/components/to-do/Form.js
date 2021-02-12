import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <input type='text' value = {props.userInput} onChange = {props.handleChange} className = 'todo-input' placeholder = 'add a task...'></input>
      <button type = 'submit' className='button'>Add Task</button>
      <button onClick = {props.clearInput} className='button button-red'>Clear Input</button>
    </form>
  )
}

export default Form;