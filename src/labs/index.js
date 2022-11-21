import Assignment6 from "./a6";
import React from "react";
import Nav from "../nav";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";
function Labs() {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment7/>}/>
                <Route path="a7"
                       element={<Assignment6/>}/>
            </Routes>
        </div>
    );
}
export default Labs;

