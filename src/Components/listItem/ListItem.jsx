import React, { useState } from 'react';
import './ListItem.css';
import show from './download.jpg';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
const ListItem = (index) => {
    const [isHovered,setIsHovered] = useState(false);


    return (
        <div className='listItem' 
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            style={{left: isHovered && index*225 -50}}
        >
        {!isHovered && <img src={show} alt=""/>}

        {isHovered && (
            <>
            <video src={trailer} autoPlay loop controls/>
            <div className='itemInfo'>
                <div className='icons'>
                    <PlayArrowIcon className='icon'/>
                    <AddIcon className='icon'/>
                    <FavoriteBorderIcon className='icon'/>
                </div>
            <div className='itemInfoTop'>
                <span>1 Hours 14 min</span>
                <span className='limit'>+16</span>
                <span>1999</span>
            </div>
            <div className='desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum et eu orci eget semper.
                Phasellus sodales viverra porta.
            </div>
            <div className='genre'>Action</div>
            </div>

            </>
        )}
        
        </div>
    );
}

export default ListItem;
