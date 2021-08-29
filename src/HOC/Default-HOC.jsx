import React from "react";
import { Route } from "react-router-dom";

//Import Layouts
import DefaultLayout from "../layouts/Default-layout";

const DefaultHOC = ({component:Component, ...rest}) => {
    // const Component = component; we can do this also

    return (<>
         <Route {...rest} component = {(props) => 
         <DefaultLayout> 
           <Component {...props}/>
         </DefaultLayout>} />
    </>);

};

export default DefaultHOC;