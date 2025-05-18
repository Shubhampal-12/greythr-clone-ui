 import React from 'react'
import Navbar from './compontent/navbar/Navbar'
import Hero from './compontent/Hero/Hero'
import Moder from './compontent/Modern/Moder'
import Employees from './compontent/employers/Employees'
import System from './compontent/System/System'
import Info from './compontent/Info/Info'
import Footer from './compontent/footer/Footer'
 
 export const App = () => {
   return (
     <div>
        <Navbar/>
        <Hero/>
        <Moder/>
        <Employees/>
        <System/>
        <Info/>
        <Footer/>
     </div>
   )
 }
 