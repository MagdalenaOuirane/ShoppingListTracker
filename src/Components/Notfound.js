import React from 'react'
import { Link } from 'react-router-dom';



const Notfound = () => {


    return (
        <div>
            <h1>It seems page you are looking for no longer exists.</h1>
            <img src={require('./error.jpg')} alt="" />
            <button><Link to="/homepage">GO TO HOMEPAGE</Link></button>
        </div>
    );
};

export default Notfound;