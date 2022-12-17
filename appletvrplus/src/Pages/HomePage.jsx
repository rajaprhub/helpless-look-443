import React from 'react'
 
import HeaderImg from '../Components/HeaderImg'
import Footer from '../Components/Footer'
import Home from './Home'

import FAQ from './FAQ'
const Homepage = () => {
  return (
    <div> 
        <HeaderImg/>
         <h1>Home content starts </h1>
             <Home/>
            
             <FAQ/>
             <h1>Home content separate </h1>
            <Footer/>
            <h1>Home content separate </h1>
    </div>
  )
}

export default Homepage