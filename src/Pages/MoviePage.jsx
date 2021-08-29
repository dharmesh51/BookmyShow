import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { NextArrow , PrevArrow ,CastPrevArrow, CastNextArrow} from "../components/Arrow/Arrow-component";
//Component
import Moviehero from "../components/MovieHero/Moviehero-component";
import Cast from "../components/Cast/Cast-component";



//Common Poster Slider
import PosterSlider from "../components/PosterSlider/PosterSlider-component";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MovieContext } from "../Context/movie.context";


const MoviePage = () => {
    const [cast, setCast] = useState([]);
    const [similarMovie, setsimilarMovie] = useState([]);
    const { id } = useParams();
    const{ movie } = useContext(MovieContext);

    useEffect(() =>{
        const RequestCast = async () => {
            const getCast = await axios.get(`/movie/${ id }/credits`);
            setCast(getCast.data.cast);
        };
        RequestCast();
    },[id]);

    

    useEffect(() =>{
      const RequestSimilarMovie = async () =>{
        const getMovie = await axios.get(`/movie/${ id }/similar`);
        setsimilarMovie(getMovie.data.results);
      };
      RequestSimilarMovie();
    },[id]);

  

    

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows:false,
              infinite: true,
            }
          }
        ]
      };
    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 6,
        nextArrow: <CastNextArrow />,
        prevArrow: <CastPrevArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 4,
              arrows:false,
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows:false,
            }
          }

        ]
      };
    return <> 
       <Moviehero />
       <div className = "w-full lg:w-3/5 lg:ml-16 px-5 lg:px-0">
       {/* lg:w-3/5 lg:ml-16 ml-4 w-11/12 */}
           <div className ="my-8">
               <h1 className ="text-2xl font-bold mb-2">About the movie</h1>
               <p className ="text-gray-800">{movie.overview}</p>
           </div>

        <hr />

           <div className ="my-8">
           <h1 className ="text-2xl font-bold mb-2">Aplicable Offer's</h1>
           <div className ="flex gap-2 md:flex-row flex-col">
           <div className ="flex items-start bg-yellow-100 border-dashed border-yellow-300	border-2 gap-3 p-3 rounded-md">
               <div className="w-8 h-8 ">
                   <img src="https://in.bmscdn.com/offers/tnclogo/rupay-stream-offer-rupay0421.jpg?02072021140247" alt="RuPay" 
                   className ="w-full h-full rounded-md"/>
               </div>
               <div className="flex flex-col gap-1">
                   <h2 className="text-md font-semibold">RuPay Stream Offer</h2>
                   <p className ="text-gray-700 text-sm">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
               </div>
           </div>

           <div className ="flex items-start bg-yellow-100 border-dashed border-yellow-300	border-2  gap-3 p-3 rounded-md">
               <div className = "w-8 h-8">
                   <img src = "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"  className ="w-full h-full rounded-md" />
                   </div>
               <div className="flex flex-col gap-1">
                   <h2 className="text-md font-semibold">Filmy Pass</h2>
                   <p className ="text-gray-700 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
               </div>
           </div>
           </div>
           </div>

        <hr />

           <div className ="my-8">
             <h1 className ="text-2xl font-bold mb-2">Cast & Crew</h1>
               <Slider {...settingsCast}>
               {cast.map((castData) => (
                   <Cast 
                   img={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                   name={castData.original_name}
                   role={castData.character}/>
               ))}
               </Slider>
            </div>

        <hr />
         
        <div className="my-8">
           <div className="ml-1.5 sm:ml-0">
                <PosterSlider 
                    config={settings}
                    images={similarMovie} 
                    Heading = "You might also like "  
                    isDark= {false} 
                /> 
            </div>
        </div>

       </div>
    </>;

};

export default MoviePage;