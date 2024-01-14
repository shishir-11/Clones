import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import './Home.css';
import Featured from '../featured/Featured.jsx';
const Home = () => {
    return (
        <div className='home'>
            <Navbar/> 
            <Featured/>
        </div>
    );
}

export default Home;
