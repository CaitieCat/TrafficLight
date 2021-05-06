import React, { useState } from 'react';
import './trafficLight.css';


export default function TrafficLight() {
    //set initial mode and create array to loop through
    const [ mode, setMode ] = useState('RED');
    const cycle = ['RED', 'YELLOW', 'GREEN'];

    //function to change the state and color of light being displayed
    function setIndex(index){
        if (index === 2){
            index = 0;
            setMode(cycle[index]);
        } else {
            index+=1;
            setMode(cycle[index]);
        }
        //clear the interval to remove erratic changes between colors
        clearInterval(counter);
        return index;
    }

    //set color changes on an interval of about 6.66 seconds
    const counter = setInterval(()=>{
       let index = cycle.indexOf(mode);
       setIndex(index);
    }, 6666);

    //conditionally render each light color based on the state of the component
    if(mode === 'RED'){
        return(
            <div class='red'>
                <div class='trafficLight'>
                        <div class='redCircle'></div>
                        <div class='greyCircle'></div>
                        <div class='greyCircle'></div>
                </div>
                <h1>The light is red.</h1>
            </div>
        )
    } else if (mode === 'YELLOW'){
        return(
            <div class='yellow'>
                <div class='trafficLight'>
                    <div class='greyCircle'></div>
                    <div class='yellowCircle'></div>
                    <div class='greyCircle'></div>
                </div>
                <h1>The light is yellow.</h1>
            </div>
        )
    } else if (mode === 'GREEN'){
        return(
            <div class='green'>
                <div class='trafficLight'>
                    <div class='greyCircle'></div>
                    <div class='greyCircle'></div>
                    <div class='greenCircle'></div>
                </div>
                <h1>The light is green.</h1>
            </div>
        )
    }
}