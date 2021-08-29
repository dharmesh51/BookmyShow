import React,{useState,useEffect} from "react";
import axios from "axios";
import HeroSlider from "react-slick";
import { HeroPrevArrow, HeroNextArrow } from "../Arrow/Arrow-component";




const HeroCarousel = () =>{

    const[Images, setImages] = useState([]);

    useEffect(() => {
        const RequestTrending = async () =>{
            const getImages = await axios.get("/trending/all/week");
            setImages(getImages.data.results);
        };
        RequestTrending();
    }, []);


    const settingslg = {
        arrows:true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode:true,
        centerPadding:"300px",
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <HeroNextArrow />,
        prevArrow: <HeroPrevArrow />

      };

    const settings = {
        arrows:true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <HeroNextArrow />,
        prevArrow: <HeroPrevArrow />
      };


    return <> 

    <div className ="lg:hidden">
    <HeroSlider {...settings} >
        {
            Images.map((Img) => (
                
                <div className = "w-full h-56 md:h-72 py-3">
                    <img src={`https://image.tmdb.org/t/p/original${Img.backdrop_path}`} alt={Img.name}  className = "w-full h-full"/>
                </div>
            ))
        }
    </HeroSlider>
    </div>

    <div className ="hidden lg:block">
    <HeroSlider {...settingslg} >
        {
            Images.map((Img) => (
                <div className = "w-full h-80	px-1.5 py-3 ">
                    <img src={`https://image.tmdb.org/t/p/original${Img.backdrop_path}`} alt={Img.name}  className = "w-full h-full rounded"/>
                </div>
            ))
        }
    </HeroSlider>
    </div>
    </>;

};

export default HeroCarousel;