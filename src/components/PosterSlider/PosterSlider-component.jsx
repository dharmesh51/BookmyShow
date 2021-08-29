import React from 'react'
import Slider from "react-slick";
//common Poster
import Poster from "../Poster/Poster-component";
//configs
import SliderSettings from "../../Config/settings";


 const PosterSlider = (props) => {
    const CaroselSettings = props.config ? props.config : SliderSettings;
    return <>
        <div className="px-1 md:px-2  lg:px-2.5 mb-2.5 lg:mb-2" >
            <h3 className = {`my-1 font-bold text-2xl ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.Heading}</h3>
            <p className = {` text-sm ${props.isDark ? "text-white" : "text-gray-200"}`}>{props.subHeading}</p>
        </div>
        <Slider {...CaroselSettings} >
        {
            props.images.map((Img) => (
            <Poster {...Img} isDark={props.isDark}/>
            ))
                
        }
        </Slider> 
        
        
        
    </>;
};

export default PosterSlider;


