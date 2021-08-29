import React,{useState, useEffect} from "react";
import axios from "axios";
import EntertainmentCardCarousel from "../components/Entertainmentcard/Entertainmentcard-component";

//configs
// import Images from "../Config/Images";

//Common Poster Slider
import PosterSlider from "../components/PosterSlider/PosterSlider-component";




const HomePage = () => {
    const [RecommendedMovies, setRecommendedMovies] = useState([]);
    const [PremieresMovies, setPremieresMovies] = useState([]);
    const [PopularMovies, setpopularMovies] = useState([]);
    const [TopRatedMovies, setTopRatedMovies] = useState([]);
    
    useEffect(() => {
        const RequestMovies = async () => {
            const getMovies = await axios.get("/movie/now_playing");
            setRecommendedMovies(getMovies.data.results);
        };
        RequestMovies();
    },[]);
    
    useEffect(() => {
        const RequestPremieresMovies = async () => {
            const getMovies = await axios.get("/movie/upcoming");
            setPremieresMovies(getMovies.data.results);
        };
        RequestPremieresMovies();
    },[]);

    useEffect(() => {
        const RequestpopularMovies = async () => {
            const getpopularMovies = await axios.get("/movie/popular");
            setpopularMovies(getpopularMovies.data.results);
        };
        RequestpopularMovies();
    },[]);

    useEffect(() => {
        const RequestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        RequestTopRatedMovies();
    },[]);

    



    return <> 
    <div className = "flex flex-col sm:gap-10 gap-5  mt-16" >
        <div className="bg-bmsbg-50">
        <div className = "container mx-auto ">
                <div className="ml-1.5 sm:ml-0">
                <PosterSlider 
                    images={RecommendedMovies} 
                    Heading = "Recommended Movies "  
                    isDark= {false} 
                /> 
                </div> 
        </div>
        </div>
        <div className = " container mx-auto ">
            <h1 className ="my-1 ml-2 font-bold text-2xl text-gray-800">The Best of Entertainment</h1>
            <div>
            <EntertainmentCardCarousel />

            </div>
        </div>
        <div className = " bg-bmsnav-800 ">
            <div className =" container	mx-auto my-3 ">
                <div className="ml-1.5 sm:ml-0">
                <div className = "my-9 hidden lg:block">
                    <img 
                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                    alt="img" />
                </div>
                <div>
                <PosterSlider 
                    images={PremieresMovies} 
                    Heading = "Premieres"  
                    subHeading = "Brand new releases every Friday" 
                    isDark= {true}
                />
                </div>

                </div>
               
            </div>
        </div>
        <div className = "container mx-auto ">
                <div className="ml-1.5 sm:ml-0">
                <PosterSlider 
                    images={PopularMovies} 
                    Heading = "Popular Movies "  
                    isDark= {false} 
                /> 
                </div> 
        </div> 
        <div className = "container mx-auto ">
                <div className="ml-1.5 sm:ml-0">
                <PosterSlider 
                    images={TopRatedMovies} 
                    Heading = "Top Rated Movies "  
                    isDark= {false} 
                /> 
                </div> 
        </div>
        
    </div>

    

    
    </>;

};

export default HomePage;