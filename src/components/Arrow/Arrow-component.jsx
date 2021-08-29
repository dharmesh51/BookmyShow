import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export const HeroPrevArrow = (props) => {
    return <> 
    <RiArrowLeftSLine 
    className = {props.className} 
    style = {{...props.style  ,
        background:"rgba(0, 0, 0, 0.520)" ,
        width : "2.5rem" , 
        height:"2.5rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"3px"
    }}
    onClick = {props.onClick}/>
    </>;
}

export const HeroNextArrow = (props) => {
    return <> 
    <RiArrowRightSLine
    className = {props.className} 
    style = {{...props.style  , 
        background:"rgba(0, 0, 0, 0.520)" ,
        width : "2.5rem" , 
        height:"2.5rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"3px"
    }}
    onClick = {props.onClick}/>
    </>;
}

export const SmallPrevArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowLeftSLine 
    className = {props.className} 
    style = {{...props.style  ,
        background:"rgba(0, 0, 0, 0.520)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        display:Arrowhide
    }}
    onClick = {props.onClick}/>
    </>;
}

export const SmallNextArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowRightSLine
    className = {props.className} 
    style = {{...props.style  , 
        background:"rgba(0, 0, 0, 0.520)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        display:Arrowhide

    }}
    onClick = {props.onClick}/>
    </>;
}


export const PrevArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowLeftSLine 
    className = {props.className} 
    style = {{...props.style  ,
        background:"rgb(102, 102, 102)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        position:"absolute",
        top:"11rem",
        display:Arrowhide
    }}
    onClick = {props.onClick}/>
    </>;
}

export const NextArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowRightSLine
    className = {props.className} 
    style = {{...props.style  , 
        background:"rgb(102, 102, 102)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        position:"absolute",
        top:"11rem",
        display:Arrowhide

    }}
    onClick = {props.onClick}/>
    </>;
}


export const CastPrevArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowLeftSLine 
    className = {props.className} 
    style = {{...props.style  ,
        background:"rgb(102, 102, 102)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        position:"absolute",
        top:"3rem",
        display:Arrowhide
    }}
    onClick = {props.onClick}/>
    </>;
}

export const CastNextArrow = (props) => {
    let Arrowhide = props.onClick === null ? "none" : "block";
    return <> 
    <RiArrowRightSLine
    className = {props.className} 
    style = {{...props.style  , 
        background:"rgb(102, 102, 102)" ,
        width : "2rem" , 
        height:"2rem", 
        color:"rgba(255, 255, 255, 0.850)", 
        padding:"3px",
        borderRadius:"50%",
        position:"absolute",
        top:"3rem",
        display:Arrowhide

    }}
    onClick = {props.onClick}/>
    </>;
}

