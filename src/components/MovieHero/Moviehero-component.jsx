import React, { useContext } from 'react';
import { MovieContext } from '../../Context/movie.context';
import MovieInfo from './MovieInfo-component';

const Moviehero = () => {
    const {movie} = useContext(MovieContext);
    return <>
            <div>
                {/*Mobile Screen */}
                <div className ="md:hidden relative" style={{height:"180vw"}}>
                    <div className ="w-full bottom-2.5 absolute z-30 px-3">
                        <MovieInfo />
                    </div>
                    <div className = " w-full h-44 bg-black z-20 absolute bottom-0 bg-opacity-50" />
                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt="Poster"
                    className ="w-full h-full" />
                </div>
                {/*Medium Screen */}
                <div className ="hidden md:block lg:hidden relative" style={{height:"135vw"}} >
                    <div className ="w-full bottom-5 absolute z-30 px-4">
                        <MovieInfo />
                    </div>
                    <div className = " w-full h-52 bg-black absolute bottom-0 z-20 bg-opacity-50" />
                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt="Poster"
                    className ="w-full h-full" />
                </div>
                {/*Large Screen */}
                <div className ="hidden lg:block relative" style={{height:"42vw"}}>
                    <div className = "absolute left-16 z-20 top-12 flex items-center gap-10 ">
                    <div className = "w-60 h-96">
                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt="Poster"
                    className ="w-full h-full rounded-3xl" />
                    </div>
                    <div>
                        <MovieInfo />
                    </div>
                    </div>
                    <div className = "absolute w-full h-full z-10 	" style={ {backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}/>
                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                    alt="Poster"
                    className ="w-full h-full" />
                </div>
            </div>
        </>
    ;
}

export default Moviehero;
