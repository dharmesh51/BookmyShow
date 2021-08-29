import React, { useEffect, useState } from 'react';
import PagePoster from '../components/Poster/PagePoster-component';
import Filter from '../components/Filter/filter-component';
import axios from 'axios';



const MovieInfopage = () => {
    const [latestmovie, setLatestmovie] = useState([]);

    useEffect(() =>{
        const RequestLatestMovie = async () => {
            const getMovies = await axios.get("/movie/now_playing");
            setLatestmovie(getMovies.data.results);
        };
        RequestLatestMovie();
    },[]);
    

    return <>
        <div className=" bg-bmsbg-50 my-16">
        <div className = "container mx-auto ">
            <div className="w-full flex lg:flex-row-reverse gap-4 ">
            <div className="w-full lg:w-3/4 px-4 md:px-6 ">
            <h1 className="text-gray-700 text-2xl md:text-4xl lg:text-3xl mb-4 font-semibold">Movies In Ahmedabad</h1>
            <div className="page_img" >
                {latestmovie.map((moviedata) =>(
                     <PagePoster 
                     images={`https://image.tmdb.org/t/p/original${moviedata.poster_path}`}
                     title={moviedata.original_title}
                     language={moviedata.original_language}
                     isDark= {false}
                     id={moviedata.id}/>
                ))};
            </div>
            </div>

            <div className="hidden lg:block lg:w-1/4 ">
            <h1 className="text-gray-700 text-2xl md:text-4xl lg:text-3xl mb-4 font-semibold">Filters</h1>
            <div className=" flex flex-col gap-2  " >
                <Filter title ="Date" tags={["ToDay","Tomorrow","This Weekend"]}  />
                <Filter title ="Categories" tags={["E Sports","Running"]} />
                <Filter title ="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
                <Filter title ="More Filters" tags={["Kids Allowed","Online Streaming","Outdoor Events"]} />
            </div>
            <div className="border border-red-600 rounded mt-2 flex items-center justify-center	text-red-600 text-sm p-1">Browse by Venues</div>
            </div>
            </div>
                          
        </div>

        </div>
            
        </>;
    
};

export default MovieInfopage;
