import React from 'react';

export default function TrafficLight(props) {
    if(props === 'red'){
        return(
            <h1>The light is red.</h1>
        )
    } else if (props === 'yellow'){
        return(
            <h1>The light is yellow.</h1>
        )
    } else if (props === 'green'){
        return(
            <h1>The light is green.</h1>
        )
    }
}