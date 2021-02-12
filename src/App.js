import React, { useState, useEffect } from 'react';
import './App.css';
import NaturalEventTracker from './components/event-tracker/EventTrackerMain';
import ToDo from './components/to-do/ToDoMain';


const App = () => {

  const [page, setPage] = useState('');

  const switchPage = (page) => {
    setPage(page);
  }

  const button1 = <button className = 'button button-blue' onClick = {() => switchPage('toDo')}>To Do App</button>
  const button2 = <button className = 'button button-blue' onClick = {() => switchPage('natural')}>Natural Events Tracker</button>

  if (page==='' || page==='toDo'){
    return (
      <div id = 'main1'>
        <div className = 'nav-buttons'>
          {button1}
          {button2}
        </div>
        <hr></hr>
        <ToDo />
      </div>
    )
  } else {
    return (
      <div id = 'main2'>
      <div className = 'nav-buttons'>
          {button1}
          {button2}
      </div>
      <hr></hr>
      <NaturalEventTracker />
    </div>
    )
  }
}

export default App;




