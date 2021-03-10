import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaTwitter, FaInstagram, FaFirefox } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import male from '../photo/male.png'
import female from '../photo/female.png'
import './TeamDetail.css';

const TeamDetail = () => {
    const { idTeam } = useParams()
    const [team, setTeam] = useState([]);

    const { strTeam, strTeamBadge, intFormedYear, strCountry, strGender, strDescriptionEN, strDescriptionES,
        strWebsite, strFacebook, strTwitter, strInstagram } = team;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    const gender = strGender;
    let playersTeam;
    if (gender === "Male") {
        playersTeam = <img src={male} alt="football team" />
    }
    else {
        playersTeam = <img src={female} alt="football team" />
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 center">
                    <img className="d-block center" src={strTeamBadge} alt="Team Badge" />
                </div>
            </div>
            <div className="container bg-primary text-white rounded m-1">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        {playersTeam}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h1 className="card-title">{strTeam}</h1>
                        <h4 className="card-text">Founded: {intFormedYear}</h4>
                        <h4 className="card-text">Country: {strCountry}</h4>
                        <h4 className="card-text">Sport Type: Football</h4>
                        <h4 className="card-text">Gender: {strGender}</h4>
                        <Link className="btn btn-dark" to={"/home"}><FontAwesomeIcon icon={faArrowLeft} /> Back </Link>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h4 className="card-text text-secondary">{strDescriptionES}</h4>
                        <h4 className="card-text text-secondary">{strDescriptionEN}</h4>
                    </div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <a href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer"><FaFirefox style={{ height: 50, width: 50 }} /></a>
                <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer"><FaFacebook style={{ height: 50, width: 50 }} /></a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer"><FaTwitter style={{ height: 50, width: 50 }} /></a>
                <a href={`https://${strInstagram}`} target="_blank" rel="noopener noreferrer"><FaInstagram style={{ height: 50, width: 50 }} /></a>
            </div>
        </div >
    );
};

export default TeamDetail;