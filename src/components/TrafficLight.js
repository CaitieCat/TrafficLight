import React from 'react';
import './trafficLight.css';

export default function TrafficLight(props) {
    if(props.color === 'red'){
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
    } else if (props.color === 'yellow'){
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
    } else if (props.color === 'green'){
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