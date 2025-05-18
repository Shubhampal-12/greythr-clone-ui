import React from 'react'
import './Footer.css'
import '../../App.css'

const Footer = () => {
  return (
     <footer className='main-footer'>
        <div className="Detail">
            <ul className="Product">
               <li className='footer-pro'>Product</li>
               <li className='footer-more'>Performance Management</li>
               <li className='footer-more'>Attendance Management</li>
               <li className='footer-more'>Leave Management</li>
               <li className='footer-more'>Payroll Software</li>
               <li className='footer-more'>HR Software</li>
                
            </ul>
            
            <ul className="Product">
               <li className='footer-pro'>HR & Payroll Administration</li>
               <li className='footer-more'> What is Payroll?</li>
               <li className='footer-more'> What is Statutory Compliance?</li>
               <li className='footer-more'>Guide to Leave Management </li>
               <li className='footer-more'> Guide to Attendance Management</li>
               <li className='footer-more'> Guide to Performance Management</li>
                
            </ul>
            
            <ul className="Product">
               <li className='footer-pro'>Resources </li>
               <li className='footer-more'>Podcasts </li>
               <li className='footer-more'>Webinars </li>
               <li className='footer-more'> Templates</li>
               <li className='footer-more'> Guides</li>
               <li className='footer-more'>Blogs </li>
                
            </ul>
            
            <ul className="Product">
               <li className='footer-pro'>Company</li>
               <li className='footer-more'>Guide to Attendance Management</li>
               <li className='footer-more'>Guide to Leave Management</li>
               <li className='footer-more'>greytHR Customers</li>
               <li className='footer-more'>Blogs</li>
               <li className='footer-more'>What is HRMS?</li>
                
            </ul>
            
            <ul className="Product">
               <li className='footer-pro'>greytHR Customers</li>
               <li className='footer-more'>Videos</li>
               <li className='footer-more'>Login</li>
               <li className='footer-more'>Company</li>
               <li className='footer-more'>Templates</li>
               <li className='footer-more'>Guides</li>
                
            </ul>
            
        </div>
        <div className="Media">
         <div className="foot-name">
            <div className="">
               © 2025 Greytip Software Pvt. Ltd.
            </div>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
         </div>
         <div className="foot-country">
            <div className="open-cou">
               
            </div>
         </div>
         <div className="foot-media"></div>
        </div>

     </footer>
  )
}

export default Footer