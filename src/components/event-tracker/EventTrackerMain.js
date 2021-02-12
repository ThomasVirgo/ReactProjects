import React, { useState, useEffect } from 'react';
import NaturalEvents from './NaturalEvents'

const NaturalEventTracker = (props) => {
    const [events, setEvents] = useState([]);
    const [dropdown, setDropdown] = useState(false);

    useEffect(()=>{
        const fetchEventData = async () => {
        const myResponse = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=50&days=100'); //have to use await because fetch returns a promise
        const data = await myResponse.json();
        setEvents(data.events);
        }
        fetchEventData()
    }, []) //providing an empty array as the dependency means it only executes once when the page loads. If you provide nothing, it will execute on every re-render!

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    const filterStyle = {
        backgroundColor: 'Blue',
        color: 'White',
        fontSize: 20,
    };

    return (
        <div id='natural-event-tracker'>
            <button id='dropdown' onClick = {toggleDropdown} style = {filterStyle}>Filter</button>
            <NaturalEvents events = {events} isDropdown = {dropdown} />
        </div>
    )
}

export default NaturalEventTracker;