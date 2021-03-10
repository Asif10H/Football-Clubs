import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { idTeam, strTeam, strTeamBadge } = props.teams;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 m-3 p-3 text-center" style={{ width: '18rem' }}>
            <div className="card h-100" >
                <img src={strTeamBadge} className="card-img-top" alt="Team Badge" />
                <div className="card-body">
                    <h5> {strTeam}</h5>
                    <Link className="btn btn-primary" to={`/team/${idTeam}`}> Explore <FontAwesomeIcon icon={faArrowRight} /> </Link>
                </div>
            </div>
        </div>
    );
};

export default Teams;