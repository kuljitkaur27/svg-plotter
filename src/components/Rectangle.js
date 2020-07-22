import React from 'react';

const rectangle = (props) => {
 return(
         <svg style={{position: "absolute"}} width='250px' height='250px' >
            <rect 
               x={props.data.x} 
               y={props.data.y} 
               width={props.data.width} 
               height={props.data.height} 
               fill={props.color} />
        </svg> 
    );
 }

export default rectangle;