import React from 'react'
import Navbar from '../compontent/navbar/Navbar'
import Hero from '../compontent/Hero/Hero'
import Modern from '../compontent/Modern/Moder'
import Employers from '../compontent/employers/Employees'
import System from '../compontent/System/System'
import Info from '../compontent/Info/Info'
import Footer from '../compontent/footer/Footer'
import Employeehomepage from '../Login_Emp/EmpHomePage/Employeehomepage'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Modern/>
        <Employers/>
        <System/>
        <Info />
        <Footer /> 
    </div>
  )
}

export default Home