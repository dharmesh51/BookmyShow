import React from "react";
//Import  component
import Navbar from "../components/Navbar/navbar-component";
import HeroCarousel from "../components/HeroCarousel/Herocarousel-component";
import FooterBMS from "../components/Footer/footer.component";





const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousel />
            {props.children}
            <FooterBMS />
        </>
    );

};

export default DefaultLayout;