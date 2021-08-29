import React, { useContext, useState } from 'react';
import { MovieContext } from '../../Context/movie.context';

//Components
import PaymentModal from '../PaymentModal/PaymentModal.component';

const MovieInfo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);
    const{movie} = useContext(MovieContext);
    const Genres = movie.genres?.map(({ name }) => name).join(", ");
    const HourRunTime = ((movie.runtime)/60).toFixed(0);
    const MinuteRunTime = (movie.runtime)%60;
    
    const RentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    };

    const BuyMovies = () => {
        setIsOpen(true);
        setPrice(499);
    };


    return <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} Price={price} />
        <div className="flex flex-col  md:gap-6 gap-4 ">
        <div className = "flex gap-3 items-center ">
            <div className = "w-36 h-8">
                <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premier" className ="w-full h-full" />
            </div>
            <span className ="text-white text-sm bg-bmsnav-800 rounded-md p-1 ">Streaming now</span>
        </div>
        <h1 className ="text-white text-3xl font-semibold hidden lg:block">{movie.original_title}</h1>
        <div className = "flex flex-col-reverse lg:flex-col sm:gap-3 gap-2">
        <div className ="flex flex-col gap-2 md:gap-3 sm:text-base text-sm">
            <h3 className ="text-gray-300"> <span className ="hover:cursor-pointer text-gary-50">{movie.original_language}</span> &bull; Languages: <span className ="text-bmsnav-50  hover:underline  " > Audio(1), Subtitle(1)</span></h3>
            <h3 className ="text-gray-100">{HourRunTime}h {MinuteRunTime}m &bull; {Genres} &bull; Release Date: {movie.release_date}</h3>
        </div>
        <div className ="flex gap-3 w-full">
            <button onClick={RentMovies} className ="flex gap-1 bg-bmsnav-50 rounded-md px-4 py-2 w-full justify-center items-center">
                <span className ="text-white font-semibold text-md">Rent</span>
                <span className ="text-white font-semibold text-md">₹149</span>
            </button>
            <button onClick={BuyMovies} className ="flex gap-1 bg-bmsnav-50 rounded-md px-4 py-2 w-full justify-center items-center">
                <span className ="text-white font-semibold text-md">Buy</span>
                <span className ="text-white font-semibold text-md">₹499</span>
            </button>
        </div>
        </div>
        </div>
        
        </>;
    
};

export default MovieInfo;
