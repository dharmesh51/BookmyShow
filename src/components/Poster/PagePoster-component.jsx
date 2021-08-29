import React from "react";
import { Link } from "react-router-dom";


const PagePoster = (props) => {

    return < Link to={`/movies/${props.id}`} > 
    <div className = "flex flex-col items-start  ">
        <div className = "md:h-full lg:h-64 h-56 w-full md:w-90 lg:w-full">
            <img 
            src={props.images} 
            alt={props.title}
            className= "w-full h-full rounded-xl" />
        </div>
        <h3 className = {`text-md md:text-xl font-semibold  ${props.isDark ? "text-white" : "text-black"}`}>{props.title}</h3>
        <p className = {`text-sm md:text-lg font-normal  ${props.isDark ? "text-gray-200" : "text-gray-600"}`}>{props.language}</p>
    </div>
    </Link>
};

export default PagePoster;