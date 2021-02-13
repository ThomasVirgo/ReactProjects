import React, { useState, useEffect } from 'react';


const FootballMain = (props) => {

    const [results, setResults] = useState([]);

    useEffect(()=>{
        const fetchResultsData = async () => {
        const myResponse = await fetch('https://api.football-data.org/v2/matches', {
            method: 'GET',
            headers: {
                'X-Auth-Token': 'e6c9b3fd6cfe4b81a41bf981997c594f' 
            }
        }); 
        const data = await myResponse.json();
        setResults(data);
        }
        fetchResultsData()
    }, []) 

    console.log(results);
    
    return (
        <div>
            <h1>Football!</h1>
        </div>
    )
}

export default FootballMain;