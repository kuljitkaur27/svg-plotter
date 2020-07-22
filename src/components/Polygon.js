import React from 'react';

const polygon = (props) => {
    return(
        <svg width='250px' height='250px' style={{position: "absolute"}}>
            <polygon 
                points={props.data} 
                fill={props.color} />
        </svg>
    );
}

export default polygon;
