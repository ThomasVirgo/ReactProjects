import React, { useState, useEffect } from 'react';

const NaturalEvents = ({events, isDropdown}) => {

  const [showEvents, setShowEvents] = useState([]);

  let myEvents = events.map(function(item){
    let myObj = {
      'title':item.title,
      'type':item.categories[0].title,
      'location':item.geometries,
    }
    return myObj
  })
  
  const mappedEvents = myEvents.map(item => <p key = {item.title}>{item.title}</p>)
  const reduceFun = (list,item) => {
    if (list.indexOf(item.type)==-1){
      list.push(item.type);
    }
    return list
  }
  let eventTypes = myEvents.reduce(reduceFun,[]);
  
  const filterEvents = (myEvents, eventType) => {
    return myEvents.filter(item => item.type == eventType);
  };

  const handleFilterClick = (eventType) => {
    const filteredEvents = filterEvents(myEvents, eventType);
    const showTheseEvents = filteredEvents.map(item => <p key = {item.title}>{item.title}</p>);
    setShowEvents(showTheseEvents);
  }

  const filterButtons = eventTypes.map(item => {
    const myButton = <button key={item} onClick = {()=>handleFilterClick(item)}>{item}</button>
    return myButton;
  })

  if (isDropdown){
    return (
      <div>
        <div id = 'filter-buttons'>{filterButtons}</div>
        <div id = 'events1'>{showEvents}</div>
      </div>
    )
  } else {
    return (
    <div>
      <div id = 'events2'>{mappedEvents}</div>
    </div>
  )} 
}

export default NaturalEvents;