import React from 'react'
 
import HeaderImg from '../Components/HeaderImg'
import Footer from '../Components/Footer'
import Home from './Home'

import FAQ from './FAQ'
const Homepage = () => {
  return (
    <div> 
        <HeaderImg/>
              <Home/>
              <FAQ/>
            <Footer/>
         
    </div>
  )
}

export default Homepage