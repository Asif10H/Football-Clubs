import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
            .then(res => res.json())
            .then(data => setLeague(data.teams))
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    league.map(teams => <Teams key={teams.idTeam} teams={teams}></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;