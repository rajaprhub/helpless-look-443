
import React from "react";
 import { Routes,Route} from "react-router-dom" ;
  import Homepage from "../Pages/HomePage";
  import SignBtn from "../Components/SignIn";
  import Details from "../DetailPage/Details";


function AllRoutes () {
    return (
       <div>
        <Routes>
          <Route path="/" element ={<Homepage/>}></Route>
          <Route path="/signin" element ={<SignBtn/>}> </Route>
          <Route path="/details" element ={<Details/>}> </Route>
        </Routes>
       </div>
   )
}

export default AllRoutes