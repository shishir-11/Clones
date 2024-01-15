import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './List.css';
import ListItem from '../listItem/ListItem';

const List = () => {

    const [slideNumber,setSlideNumber] = useState(0);

    function handleClick(direction){
        let distance = cont_ref.current.getBoundingClientRect().x - 50;
        if(direction==="left" && slideNumber>0 && distance%230 ===0){
            cont_ref.current.style.transform = `translateX(${230+distance}px)`;
            setSlideNumber(slideNumber-1);
        }
        if(direction==="right" && slideNumber<5 & distance%230===0){
            cont_ref.current.style.transform = `translateX(${distance-230}px)`;
            setSlideNumber(slideNumber+1);
        }
        console.log(distance);
    }
    
    const cont_ref = useRef();
    return (
        
        <div className='list'>
            <span className='listTitle'>Continue to watch</span>
            <div className='wrapper'>
                <ArrowBackIosIcon className='sliderArrow left' onClick={()=>{handleClick("left")}} style={{visibility:`${slideNumber>0?"":"hidden"}`}}/>
                <div className='container' ref={cont_ref}>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>
                    <ListItem/>



                </div>
                <ArrowForwardIosIcon className='sliderArrow right' onClick={()=>handleClick("right")} style={{visibility:`${slideNumber!==5?"":"hidden"}`}}/>
            </div>
        </div>
    );
}

export default List;
