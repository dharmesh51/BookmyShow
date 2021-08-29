import React from "react";
import { Link } from "react-router-dom";
const Poster = (props) => {

    return < Link to={`/movies/${props.id}`}> 
    <div className = "flex flex-col items-start gap-1 px-1 md:px-2 lg:px-2.5">
        <div className = "md:h-80 h-56 md:w-full">
            <img 
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`} 
            alt={props.title}
            className= "w-full h-full rounded-xl" />
        </div>
        <h3 className = {`text-md md:text-lg font-semibold ${props.isDark ? "text-white" : "text-black"}`}>{props.original_title}</h3>
        <p className = {`text-sm font-normal ${props.isDark ? "text-gray-200" : "text-gray-600"}`}>{props.vote_average}/10</p>
    </div>
    </Link>
};

export default Poster;