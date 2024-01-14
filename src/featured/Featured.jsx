import React from 'react';
import "./Featured.css";
import movie from '../Components/pfp.jpg'
const Featured = () => {
    return (
        <div className='featured'>
            <img src={movie} alt=""/>
            <div className='info'>
            </div>
        </div>
    );
}

export default Featured;
