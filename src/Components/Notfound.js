import React from 'react'



const Notfound = () => {


    return (
        <div style={{ textAlign: 'center' }}>
            <h1>It seems page you are looking for no longer exists.</h1>
            <img src={require('./error.jpg')} alt="" />
        </div>
    );
};

// <h1 style={{ position: 'absolute', top: '0', left: '0' }}>Not found</h1>




export default Notfound;