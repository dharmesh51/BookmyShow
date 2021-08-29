import React from "react";
// import { Route } from "react-router-dom";

//For API integration
import axios from "axios";

//Import HOC
import DefaultHOC from "./HOC/Default-HOC";
import MovieHOC from "./HOC/Movie-HOC";


//Import Pages
import HomePage from "./Pages/Homepage";
import Movies from "./Pages/MoviePage";
import MovieInfopage from "./Pages/Movieinfopage";


// Import React-Slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC  path = "/"  exact component = {HomePage}/>
      <MovieHOC  path = "/movies/:id"  exact component = {Movies}/>
      <DefaultHOC path = "/movie" exact component = {MovieInfopage} />
     
    </>
  );
}

export default App;
