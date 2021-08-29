import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GoMailRead } from 'react-icons/go';
import { GiTicket } from 'react-icons/gi';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube  } from 'react-icons/fa';


const FooterBMS = () =>{

    return <>
    <footer className="bg-bmsnav-750 p-3">
        <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
            <div className="flex flex-col ietms-center gap-2 w-40 ">
                <span className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200"><RiCustomerService2Fill className="w-full"/></span>
                <span className="text-gray-400 text-xs md:text-sm  text-center hover:text-gray-200">24/7 CUSTOMER CARE</span>
            </div>
            <div className="flex flex-col ietms-center gap-2 md:w-56 w-48">
                <div className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200"><GiTicket className="w-full" /></div>
                <span className="text-gray-400 text-xs md:text-sm text-center hover:text-gray-200">RESEND BOOKING CONFIRMATION</span>
            </div>
            <div className="flex flex-col ietms-center gap-2 md:w-52 w-44">
                <div className="text-3xl md:text-5xl text-gray-400 hover:text-gray-200"><GoMailRead className="w-full"/></div>
                <span className="text-gray-400 text-xs md:text-sm text-center hover:text-gray-200">SUBSCRIBE TO THE NEWSLETTER</span>
            </div>
        </div>

        <div className="my-6"></div>
        <div className="flex items-center gap-2">
        <div className="w-1/2 h-0.5x bg-gray-400 "></div>
        <div className ="flex  w-15">
            <span className = "text-white font-sans text-base md:text-lg">book</span>
            <div className = "w-7 h-7 md:w-8 md:w-8">
            <img src = "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo"  className ="w-full h-full " />
            </div>
            <span className = "text-white font-sans text-base  md:text-lg">show</span>
        </div>
        <div className="w-1/2 h-0.5x bg-gray-400 "></div>
        </div>
        <div className="my-6"></div>
        <div className="flex items-center justify-center gap-2">
            <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300"><FaFacebookF className="w-full mt-2"/></span>
            <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300"><FaTwitter className="w-full mt-2"/></span>
            <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300"><FaInstagram className="w-full mt-2"/></span>
            <span className="rounded-full h-8 w-8 bg-gray-500 hover:bg-gray-300"><FaYoutube className="w-full mt-2"/></span>
        </div>
        <div className="my-4"></div>
        <div className="text-gray-400 text-xs font-normal	flex items-center justify-center">Copyright 2021 &copy; Dharmesh Gohil. All Rights Reserved.</div>
        


        </div>
        
        
    </footer>
    </>;
};
export default FooterBMS;