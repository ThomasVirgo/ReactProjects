import React from 'react';

const NaturalEvents = ({events}) => {
    let filteredEvents = events.map(function(item){
      let myObj = {
        'title':item.title,
        'type':item.categories[0].title,
        'location':item.geometries,
      }
      return myObj
    })
    let mappedEvents = filteredEvents.map(item => <p key = {item.title}>{`${item.title} is a ${item.type}`}</p>)
  
    return (
      <div>
        <h5>{mappedEvents}</h5>
      </div>
    )
  }

export default NaturalEvents;