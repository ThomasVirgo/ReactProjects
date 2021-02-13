import React, { useState, useEffect } from 'react';
import './App.css';
import NaturalEventTracker from './components/event-tracker/EventTrackerMain';
import ToDo from './components/to-do/ToDoMain';
import FootballMain from './components/football-tracker/footballMain';


const App = () => {

  const [page, setPage] = useState('');

  const switchPage = (page) => {
    setPage(page);
  }

  const button1 = <button className = 'button button-blue' onClick = {() => switchPage('toDo')}>To Do App</button>
  const button2 = <button className = 'button button-blue' onClick = {() => switchPage('natural')}>Natural Events Tracker</button>
  const button3 = <button className = 'button button-blue' onClick = {() => switchPage('football')}>Football Tracker</button>

  return (
    <div id='main'>
      <div className='nav-buttons'>
        {button1}
        {button2}
        {button3}
      </div>
      <hr></hr>
      {/* use syntax of the form {condition && show this if conditional is true} */}
      {page=='toDo' && <ToDo />}
      {page=='natural' && <NaturalEventTracker />}
      {page=='football' && <FootballMain />}
    </div>
  )
}

export default App;




