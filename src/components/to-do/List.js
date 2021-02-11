import React from 'react';


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

export default List;
