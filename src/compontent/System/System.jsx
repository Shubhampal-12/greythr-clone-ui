import React from 'react'
import './System.css'
import System1 from '../All  Image/system1.png'
import System2 from '../All  Image/system2.png'
import System3 from '../All  Image/system3.png'
import System4 from '../All  Image/system4.png'
import System6 from '../All  Image/system6.png'
import System7 from '../All  Image/system7.png'


const System = () => {
  return (
    <div className='main-system'>
        <h2 className="system-tittle">
            <p>Get full access to the greytHR <span className='text-purple-600'> Ecosystem</span></p>
        </h2>
        <span className='system-parag'>
            greytHR users are backed by our strong community, led by industry thought leaders and practitioners
        </span>

        <div className="system-box">
            <div className="box-system bg-pink-200">
                <div className="system-img">
                    <img src={System1} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>

            <div className="box-system bg-purple-300">
                <div className="system-img">
                    <img src={System2} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>

            <div className="box-system bg-blue-200">
                <div className="system-img">
                    <img src={System3} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>

            <div className="box-system bg-green-100">
                <div className="system-img">
                    <img src={System4} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>

            <div className="box-system bg-red-100">
                <div className="system-img">
                    <img src={System6} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>

            <div className="box-system bg-gray-400">
                <div className="system-img">
                    <img src={System7} alt="" />
                </div>
                <div className="system-tittle">
                    <h3 className='mb-1 text-1xl'>greytHR Academy</h3>
                    <p className=" mb-1 text-lg text-<size>/<number> mt-4 text-black">Only academy offering courses for HR & Payroll in India</p>
                </div>
                <span className="text-3xl text-center text-purple-800 font-semibold ">Know More</span>
            </div>
        </div>
        
    </div>
  )
}

export default System