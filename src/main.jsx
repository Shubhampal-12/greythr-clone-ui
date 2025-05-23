import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import {BrowserRouter} from 'react-router-dom'
import Login from './compontent/login_page/Login'
import Navbar from './compontent/navbar/Navbar'

 

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <App/>
     </BrowserRouter>
  </StrictMode>,
)
