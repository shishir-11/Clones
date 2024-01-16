import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Watch.css'
import { Link } from 'react-router-dom';
const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

const Watch = () => {
    return (
        <div className='watch'>
            <Link style={{color:"white", textDecoration:"none"}} to={"/"}>
            <div className='back'>
                <ArrowBackIcon/>
                Home
            </div>
            </Link>
            <video className='video' autoPlay progress controls src={trailer}/>           
        </div>
    );
}

export default Watch;
