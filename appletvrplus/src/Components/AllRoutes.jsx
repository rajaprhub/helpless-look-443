
import React from "react";
 import { Routes,Route} from "react-router-dom" ;
  import Homepage from "./HomePage";
  import Login from "./Login";


function AllRoutes () {
    return (
       <div>
        <Routes>
          <Route path="/" element ={<Homepage/>}></Route>
          <Route path="/login" element ={<Login/>}> </Route>
        </Routes>
       </div>
   )
}

export default AllRoutes