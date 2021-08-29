import React from "react";
import EntertainmentSlider from "react-slick";
import { SmallPrevArrow, SmallNextArrow } from "../Arrow/Arrow-component";


const EntertainmentCardCarousel = () =>{

    const settings = {
        arrows:false,
        infinite: false,
        autoplay: false,
        slidesToShow: 2.5,
        slidesToScroll: 2,
        rows:2,

      };

      const settingslg = {
        arrows:true,
        infinite: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 4,
        nextArrow: <SmallNextArrow />,
        prevArrow: <SmallPrevArrow />
      };

    const Images = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/theatre-shows-collection-202012041128.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/dance-collection-01102020340.png"
    ];

    return <> 

    <div className = "lg:hidden">
    <EntertainmentSlider {...settings} >
        {
            Images.map((Img) => (
                <div className = "w-full h-36 py-1 px-2 md:h-72 ">
                    <img src={Img} alt="Entertainment Card"  className = "w-full h-full rounded-lg"/>
                </div>
            ))
        }
    </EntertainmentSlider>
    </div>


    <div className = "hidden lg:block">
    <EntertainmentSlider {...settingslg} >
        {
            Images.map((Img) => (
                <div  className = "w-full h-52  py-2 px-3 	">
                    <img  src={Img} alt="Entertainment Card"  className = "w-full h-full rounded-lg"/>
                </div>
            ))
        }
    </EntertainmentSlider>
    </div>

    </>;

};

export default EntertainmentCardCarousel;