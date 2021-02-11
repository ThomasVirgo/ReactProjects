import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <input type='text' value = {props.userInput} onChange = {props.handleChange}></input>
      <button type = 'submit'>Add Task</button>
      <button onClick = {props.clearInput}>Clear Input</button>
    </form>
  )
}

export default Form;