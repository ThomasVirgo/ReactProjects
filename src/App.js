import React, { useState, useEffect } from 'react';
import './App.css';
import NaturalEventTracker from './components/event-tracker/EventTrackerMain';
import ToDo from './components/to-do/ToDoMain';


const App = () => {
  const [page, setPage] = useState('');

  const switchPage = (page) => {
    setPage(page);
  }

  const button1 = <button onClick = {() => switchPage('toDo')}>To Do App</button>
  const button2 = <button onClick = {() => switchPage('natural')}>Natural Events Tracker</button>

  if (page==='' || page==='toDo'){
    return (
      <div id = 'main1'>
        {button1}
        {button2}
        <br/>
        <hr></hr>
        <ToDo />
      </div>
    )
  } else {
    return (
      <div id = 'main2'>
      {button1}
      {button2}
      <br/>
      <hr></hr>
      <NaturalEventTracker />
    </div>
    )
  }
}

export default App;




