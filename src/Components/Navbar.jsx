import React from 'react';
import './Navbar.css';
import logo from './netflix-logo.png';
import pfp from './pfp.jpg';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='left'>
                    <img src={logo} alt=""/>
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>Mylist</span>

                </div>
                <div className='right'>
                    <SearchIcon/>
                    <span>KID</span>
                    <NotificationsIcon/>
                    <img src={pfp} alt=""/>
                    <div className='profile'>
                        <KeyboardArrowDownIcon className='icon'/>
                        <div className='options'>
                            <span>Settings</span>
                            <span>LogOut</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
