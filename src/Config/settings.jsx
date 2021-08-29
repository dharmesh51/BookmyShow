import React from "react";
import { NextArrow , PrevArrow } from "../components/Arrow/Arrow-component";

const settings = {
    infinite: false,
    speed: 500,
    
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:false,
          infinite: true,
        }
      },
      {
        breakpoint: 420,
        settings:{
          slidesToShow:2.7,
          slidesToScroll:3,
          arrows:false,
          infinite: true
        }

      }
    ]
  };

  export default settings;