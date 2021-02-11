import React, { useState, useEffect } from 'react';
import NaturalEvents from './NaturalEvents'

const NaturalEventTracker = (props) => {
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        const fetchEventData = async () => {
        const myResponse = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=10&days=10'); //have to use await because fetch returns a promise
        const data = await myResponse.json();
        setEvents(data.events);
        console.log(data.events);
        }
        fetchEventData()
    }, []) //providing an empty array as the dependency means it only executes once when the page loads. If you provide nothing, it will execute on every re-render!

    return (
        <div id='natural-event-tracker'>
            <NaturalEvents events = {events} />
        </div>
    )
}

export default NaturalEventTracker;