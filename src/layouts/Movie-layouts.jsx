import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
//Import navbar component
import MovieNavbar from "../components/Navbar/MovieNavbar";

//Context
import { MovieContext } from "../Context/movie.context";
import axios from 'axios';



const MovieLayout = (props) => {

const { id } = useParams();
const { setMovie } = useContext(MovieContext);
 
useEffect(() => {
    const RequestMovie = async () => {
        const getMovieData = await axios.get(`/movie/${id}`);
        setMovie(getMovieData.data);
    };
    RequestMovie();
},[id]);


    return <>
            <MovieNavbar />
            {props.children}
        </>;

};

export default MovieLayout;