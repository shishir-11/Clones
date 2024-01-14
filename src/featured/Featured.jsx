import React from 'react';
import "./Featured.css";
import movie from '../Components/pfp.jpg'
import batman from './Batman Begins.png'; 
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = ({type}) => {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
                </div>
            )}       
            <img src={movie} alt=""/>
            <div className='info'>
                <img src={batman}/>

                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                    adipisci repellendus eum quasi illo, velit numquam, maxime tempora
                    sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
                    temporibus eum earum?
                </span>
                <div className='buttons'>
                    <button className='play'>Play<PlayArrowIcon/></button>
                    <button className='Info'>Info<InfoIcon/></button>
                </div>
            </div>
        </div>
    );
}

export default Featured;
