import React from 'react'
 
 import Country from '../All  Image/Countries.png'
 import user from  '../All  Image/Users.jpg'
 import comp from   '../All  Image/Companies.png'
  import vide from  '../All  Image/Youtube.png'
import './Hero.css'
import Button from '../all compontent/Button';
// import ReactPlayer from 'react-player'

const Hero = () => {
  return (
    <>
      <div className='main-hero'>
          <div className="hero-top">
             <div className='para'>
                <h1><p>Welcome to the <span> greyt </span> Side .</p></h1>
             </div>
            <span>
                <p>The most trusted full-suite HRMS for your people operations</p>
            </span>
            <div className="main-box">
                <div className="box1">
                    <img src={Country} alt="Earth" />
                    <div className="">
                        <h3>32+</h3>
                        <p>Country</p>
                    </div>
                </div>
                
                <div className="box2 box1 ">
                    <img src={comp} alt="Earth" />
                    <div className="">
                        <h3>490,000,000+</h3>
                        <p>Companices</p>
                    </div>
                </div>
                
                <div className="box3 box1  ">
                    <img src={user} alt="Earth" />
                    <div className="">
                        <h3>32,000,000+</h3>
                        <p>Users</p>
                    </div>
                </div>
                
            </div>
             
          </div>
          <div className="gap-10 mt-9 inline-flex"> 
              <Button/>
              <Button/>
            </div>
          <div className="hero-bottom">
             <div className="vide">
                 {/* <ReactPlayer className='link' width="100" height="200" controls url='https://youtu.be/PMv1UcsF2no?si=NoGbtLIK34Ctac6x' /> */}
                 <img src={vide} alt="" />
             </div>
          </div>
      </div>
    </>
  )
}

export default Hero