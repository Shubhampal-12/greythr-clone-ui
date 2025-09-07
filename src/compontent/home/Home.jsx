import React from 'react'
import Navbar from '../StaticHomePage/Navbar/Navbar'
import WelcomeDetails from '../StaticHomePage/WelcomeDetails/WelcomeDetails'
import ModernHrDetails from '../StaticHomePage/ModernHrDetails/ModernHrDetails'
import FeaturesDetails from '../StaticHomePage/FeaturesDetails/FeaturesDetails'
import EcoSystemDetails from '../StaticHomePage/EcoSystemDetails/EcoSystemDetails'
import EvaluatePriceDetails from '../StaticHomePage/EvaluatePriceDetails/EvaluatePriceDetails'
import Footer from '../StaticHomePage/Footer/Footer'
 

const Home = () => {
  return (
    <div>
        <Navbar/>
        <WelcomeDetails/>
        <ModernHrDetails/>
        <FeaturesDetails/>
        <EcoSystemDetails/>
        <EvaluatePriceDetails />
        <Footer /> 
    </div>
  )
}

export default Home