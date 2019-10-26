import React from 'react'



const Notfound = () => {


    return (
        <div>
            <h1>It seems page you are looking for no longer exists.</h1>
            <img src={require('./error.jpg')} alt="" />
            <button>GO TO HOMEPAGE</button>
        </div>
    );
};

export default Notfound;