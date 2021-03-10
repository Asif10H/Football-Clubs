import React from 'react';
import notfound from '../photo/notfound.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center w-25 my-5">   
            <img src={notfound} className="card-img " alt="heading" />   
            <Link className="btn btn-dark mx-3" to={"/home"}><FontAwesomeIcon icon={faArrowLeft} /> Back </Link>
        </div>  
    );
};

export default NotFound;