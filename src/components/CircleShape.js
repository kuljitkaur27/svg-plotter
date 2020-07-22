import React from 'react';

const circleShape = (props) => {
 return(
         <svg style={{position: "absolute"}} width='250px' height='250px' > 
            <circle 
               cx={props.data.cx} 
               cy={props.data.cy} 
               r={props.data.radius} 
               fill={props.color} />
        </svg>   
    );
 }

export default circleShape;
