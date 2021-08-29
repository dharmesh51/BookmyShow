import React, { useContext } from "react";
import { BiChevronLeft , BiSearch , BiChevronDown , BiMenu ,BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../Context/movie.context";

const Navsm = () => {
    const {movie} = useContext(MovieContext);
    return <>
    <div className = "flex justify-between items-center ">
    <div className =" flex items-center	 gap-2">
        <span className ="text-white text-2xl"><BiChevronLeft /></span>
        <h4 className = "text-white text-2xl font-semibold">{movie.original_title}</h4>
    </div>
    <div className = "text-gray-300 w-6 h-6">
    <BiShareAlt className = "w-full h-full" />
    </div>
    </div> 

    </>;
};

const Navlg = () => {
    return <> 
    <div className="container mx-auto px-4 flex items-center justify-between">
    <div className = "flex items-center gap-6 w-1/2">
        <div className ="flex  w-15">
            <span className = "text-white font-sans  text-lg">book</span>
            <div className = "w-8 h-8">
            <img src = "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"  className ="w-full h-full " />
            </div>
            <span className = "text-white font-sans  text-lg">show</span>
        </div>
        <div className = " w-full bg-white flex items-center gap-2.5 px-3 py-1.5 rounded">
            <BiSearch  className = "text-gray-500"/>
            <input type="search" className = "w-full text-sm font-normal bg-transparent focus:outline-none border-none " placeholder = " Search for Movies, Events, Plays, Sports, and Activities" />
        </div>
    </div>
    <div className ="flex items-center gap-5">
        <span className = "text-gray-300 text-sm font-medium flex items-center cursor-pointer hover:text-white">Ahmedabad <BiChevronDown  /> </span>
        <button className = "bg-bmsnav-50 text-white rounded px-3.5 py-1 text-sm font-medium">Sign in</button>
        <div className ="w-7 h-8 text-white">
            <BiMenu  className ="w-full h-full "/>
        </div>
    </div>
    </div>

    </>;
};

const MovieNavbar = () => {
     
     return <> 
     <nav className = "absolute lg:relative	inset-x-0 lg:bg-bmsnav-700 p-3.5 z-30 bg-opacity-10	 backdrop-filter backdrop-blur-lg">
        <div className = "lg:hidden ">
             {/*Mobile Screen*/}
             <Navsm />
        </div>
        
        <div className = "hidden lg:flex ">
            {/*Large Screen*/ }
            <Navlg />
        </div>

     </nav>
     </>;

};

export default MovieNavbar;