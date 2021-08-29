import React from "react";
import { Route } from "react-router-dom";

//Import Layouts
import MovieLayout from "../layouts/Movie-layouts";

const MovieHOC = ({component:Component, ...rest}) => {
    // const Component = component; we can do this also

    return (<>
         <Route {...rest} component = {(props) => 
         <MovieLayout> 
           <Component {...props}/>
         </MovieLayout>} />
    </>);

};

export default MovieHOC;