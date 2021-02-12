import React from 'react';


const List = (props) => {
  const taskElements = props.tasks.map((item, index) => 
    <div key = {item} className='task'>
      <h2>{item}</h2>
      <button onClick = {() => props.deleteTask(item)} className='delete-task'>X</button>
    </div>
  )
  return (
    <div className = 'tasks-container'>
      {taskElements}
    </div>
  )
}

export default List;
