import React from 'react'
import './Employees.css'
import Person1 from '../All  Image/Person1.png'
import Person2 from '../All  Image/Person2.png'
import Person3 from '../All  Image/Person3.png'
import Person4 from '../All  Image/Person4.png'
import Person5 from '../All  Image/Person5.png'
import Employ from '../All  Image/Emp-img.jpg'
 

const Employees = () => {
  return (
    <div className='main-Emp'>
        <h1>Everyone gets <span>Value </span> from day 1</h1>
        <span>
            <p>A platform loved by everyone in your company - by employers and employees</p>
        </span>
        <div className="main-parson">
            <div className="parson-box">
                <div className="par1">
                    <img src={Person1} className='mt-4' alt="" />
                    <p>CIO</p>
                </div>
                 
                <div className="par1">
                    <img src={Person2} className='mt-4' alt="" />
                    <p>CHRO</p>
                </div>
                 
                <div className="par1">
                    <img src={Person3} className='mt-4' alt="" />
                    <p>Payroll Admin</p>
                </div>
                  
                <div className="par1">
                    <img src={Person4} className='mt-4' alt="" />
                    <p>Managers</p>
                </div>
                 
                <div className="par1">
                    <img src={Person5} className='mt-4' alt="" />
                    <p>Employees</p>
                </div>
                 
            </div>
        </div>
        <div className="datails-Emp">
            <div className="box-datails">
                  <div className="left-Emp">
                        <div className="Top-Emp">
                          <h2 className='Emp-work'>
                              <p>Without greytHR</p> 
                             <div className="work">
                                <ul>
                                    <li> Data security concerns and system compatibility issues.</li>
                                    <li>Low user adoption rates.</li>
                                    <li>No guided implementation.</li>
                                </ul>
                             </div>
                          </h2>
                        </div>
                        <div className="Bottom-Emp">
                            <h2 className="bottom-tittle">
                                <p>With greytHR</p>
                            </h2>
                            <div className="bottom-para">
                                <p>No compliance nightmares! greytHR’s own implementation team
                                     works with your IT, to ensure seamless implementation and integration of HR tech,
                                     with the assurance of data security and scalability.
                                </p>
                            </div>
                        </div>
                  </div>
                  <div className="right-Emp">
                        <div className="image-emp">
                            <img src={Employ} alt="" />
                        </div>
                  </div>
            </div>

        </div>

    </div>
  )
}

export default Employees