import React from 'react';
import Navbar from '../../Components/navbar/Navbar.jsx';
import './Home.css';
import Featured from '../../Components/featured/Featured.jsx';
import List from '../../Components/list/List.jsx';
const Home = () => {
    return (
        <div className='home'>
            <Navbar/> 
            <Featured />
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}

export default Home;
