import React from 'react'

const Cast = (props) => {
    return <>
    
        <div className="flex flex-col items-center w-22">
               <div className ="w-20 h-20 mb-1 md:w-24 md:h-24">
                   <img src={props.img} 
                   alt="cast" 
                   className="w-full h-full rounded-full"/>
               </div>
               <h5 className="text-sm md:text-base ">{props.name}</h5>
               <h5 className="text-gray-700 text-xs md:text-sm text-center ">as {props.role}</h5>
        </div>
            
        </>;
    
};

export default Cast;
