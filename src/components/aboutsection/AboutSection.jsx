import React from 'react'
import {Link} from 'react-router-dom'
import './aboutsection.css'

function AboutSection() {
  return (
    <>
    <div className='about-section flex flex-col items-center justify-center'>
       <div className='container flex flex-col items-center justify-center'>
            <p className='text-5xl text-center font-regular'>Everything you need to know about Boresha Afya < br/>Healthcare <span className='font-bold text-cyan-400'>management and operations</span></p>
            <p className='mt-5 text-xl font-regular text-center'>Professional healthcare services is a safe way to keep your family well</p>
            <div className='container gap-x-5 gap-y-10 py-10 flex flex-wrap items-center justify-center'>
              <div className=' rounded-md single-about p-4'>
                <div className='side-icon flex flex-col  flex items-center justify-center bg-cyan-600'>
                  <i class="fa-solid fa-syringe icon"></i>
                </div>
                <p className='text-end font-medium text-2xl'>About</p>
                <p className='text-end'>Boresha Afya Healthcare is a medical organization that focuses in improving the health of individual with and across the country.
                We are composed of a strong management and a trained medical stuff.
                </p>
                <Link to='/about'><button className='self-end text-white py-4 rounded-md px-5 bg-gradient-to-r from-blue-400 to-blue-500'>Discover More</button></Link>
              </div>

              <div className=' rounded-md single-about p-4'>
                <div className='side-icon flex flex-col  flex items-center justify-center bg-cyan-600'>
                  <i class="fa-solid fa-handshake icon"></i>
                </div>
                <p className='text-end font-medium text-2xl'>Patners</p>
                <p className='text-end'>We have collaborated with other partners such as NHIF to ensure that health reaches both the rich and the less fortunes. Our medical cover
                providers patners work closely with us to ensure that even expensive surgeries are done to the less able at a no cost charge
                </p>
              </div>

              <div className=' rounded-md single-about p-4'>
                <div className='side-icon flex flex-col  flex items-center justify-center bg-cyan-600'>
                  <i class="fa-solid fa-trophy icon"></i>
                </div>
                <p className='text-end font-medium text-2xl'>Achivement</p>
                <p className='text-end'>With all humility and honor we speak of our success in our health services. From surgeries, consultancy and other services we have experienced 90% success with
                 low death rates in all treatments
                </p>
               <Link to='/achievements'> <button className='self-end text-white py-4 rounded-md px-5 bg-gradient-to-r from-blue-400 to-blue-500'>Explore More</button></Link>
              </div>

              <div className=' rounded-md single-about p-4'>
                <div className='side-icon flex flex-col  flex items-center justify-center bg-cyan-600'>
                  <i class="fa-solid fa-user-doctor icon"></i>
                </div>
                <p className='text-end font-medium text-2xl'>Expertisee</p>
                <p className='text-end'>We are composed of professionals. Well experienced doctor in all department. Committed to arriving at a successful result with zero death records. Collaborating with the health cabinet to ensure that we updates
                all about the health measures that should be taken
                </p>
              </div>
            </div>
       </div>

    </div>
</>
  )
}

export default AboutSection