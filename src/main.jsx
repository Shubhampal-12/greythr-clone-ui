import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import Hero from './compontent/Hero/Hero'
import Moder from './compontent/Modern/Moder'
import Employees from './compontent/employers/Employees'
import System from './compontent/System/System'
import Info from './compontent/Info/Info'
import Footer from './compontent/footer/Footer'
 
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Hero/>
    <Moder/>
    <Employees/>
    <System/>
    <Info/>
    <Footer/>
  </StrictMode>,
)
