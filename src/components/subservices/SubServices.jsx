import React from 'react'
import {Link} from 'react-router-dom'
import './subservices.css'

function SubServices() {
  return (
    <div className='sub-services flex items-center justify-center'>
        <div className='container py-10 flex items-center flex-col justify-center'>
            <p className='font-medium text-5xl text-stone-800 text-center'>Our healthcare deliveries</p>
            <p className='text-xl text-center'>Our focus is to see a healthy generation growing in the most Mediacl described manner </p>
            <div className='container py-10 flex items-center justify-center flex-wrap gap-2.5'>
                 <div className='single-service rounded-md flex items-center justify-between'>
                      <div className='service-img'>
                        <img src={require('../../assets/outpatient.jpg')} alt=''/>   
                      </div>
                      <div  className='text-holder flex flex-col text-end p-2  '>
                      <p className='font-bold text-xl'>Outpatient Services</p>
                      <p>We give ambulatory services to all. All the procedures, treatments or testing that do not require an overnight stay in the hospital.
                      Identifying you location and a good description of your health problem will be needed.
                      </p>
                      </div>
                 </div>

                 <div className='single-service rounded-md flex items-center justify-between'>
                      <div className='service-img'>
                        <img src={require('../../assets/inpatient.jpg')}  alt=''/>   
                      </div>
                      <div  className='text-holder flex flex-col text-end p-2  '>
                      <p className='font-bold text-xl'>Inpatient Services</p>
                      <p>We give inpatient services to patients/families that require 24hour supervision. This includes of the acute care hospital, skilled
                      or intermediate care facility or services which necessitate the admission of patient for treatment in our healthcare facility
                      </p>
                      </div>
                 </div>

                  <div className='single-service rounded-md flex items-center justify-between'>
                      <div className='service-img'>
                        <img src={require('../../assets/paediatric.jpg')}  alt=''/>   
                      </div>
                      <div  className='text-holder flex flex-col text-end p-2  '>
                      <p className='font-bold text-xl'>Paediatric Services</p>
                      <p>We give great medical care to infants and children. Our paediatric services ranges from dental, immunization and other health related
                      problems to children. We also have facilities for the babies that are conducive for both born babies and older kids. There are conselling and consultaion services for kids as well
                      </p>
                      </div>
                 </div>

                 <div className='single-service rounded-md flex items-center justify-between'>
                      <div className='service-img'>
                        <img src={require('../../assets/orthopaedic.jpg')}  alt=''/>   
                      </div>
                      <div  className='text-holder flex flex-col text-end p-2  '>
                      <p className='font-bold text-xl'>Orthopaedic Services</p>
                      <p>Get a musculoskeletal system tratement. We focus on treatment of injuries and diseases of your body musculoskeletal system. This includes
                      joints, ligaments, tendons, muscles and nervers which is associated with your moving, walking and being active
                      </p>
                      </div>
                 </div>
            </div>
           <Link to='/services'><button className='service-btn text-white text-xl font-medium py-4 px-10 rounded-md bg-gradient-to-r from-blue-300 to-blue-500 hover:from-indigo-500 hover:to-indigo-700'>All services</button></Link> 
        </div>
    </div>
  )
}

export default SubServices