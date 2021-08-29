import React from "react";
import { BiChevronRight , BiSearch , BiChevronDown , BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navsm = () => {
    return <>
    <div className = "flex justify-between items-center">
    <div>
        <h4 className = "text-white text-2xl font-bold">It All Starts Here!</h4>
        <span className = "text-bmsnav-100 text-sm font-medium flex items-center">Ahmedabad <BiChevronRight  /> </span>
    </div>
    <div className = "text-gray-300 w-6 h-6">
    <BiSearch className = "w-full h-full" />
    </div>
    </div> 

    </>;
};
const Navmd = () => {
    return <> 
    <div className = " w-full bg-white flex items-center gap-2.5 px-3 py-1.5 rounded">
        <BiSearch  className = "text-gray-500"/>
        <input type="search" className = "w-full text-sm font-normal bg-transparent focus:outline-none border-none " placeholder = " Search for Movies, Events, Plays, Sports, and Activities" />
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
const Navlgmenu = () => {
    return <>
    <div className="container mx-auto px-4  flex items-center justify-between">
        <div className="flex gap-5 ">
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white "><Link to={"/movie"}>Movies</Link></div>
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white ">Events</div>
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white ">Sports</div>
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white ">Activities</div>
        </div>
        <div className="flex gap-4">
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white ">Offers</div>
            <div className="text-gray-300 font-medium text-sm cursor-pointer hover:text-white ">Gift Cards</div>
        </div>
    </div>
    </>;
};

const Navbar = () => {
     
     return <> 
     <nav className = "bg-bmsnav-700 p-3	">
        <div className = "md:hidden ">
             {/*Mobile Screen*/}
             <Navsm />
        </div>
        <div className = "hidden md:flex lg:hidden">
            {/*Medium Screen*/ }
            <Navmd />
        </div>
        <div className = "hidden lg:flex ">
            {/*Large Screen*/ }
            <Navlg />
        </div>

     </nav>
     <nav className="bg-bmsnav-850 p-1 hidden lg:flex">
         {/*Large Screen */}
         <Navlgmenu />
     </nav>
     </>;

};

export default Navbar;