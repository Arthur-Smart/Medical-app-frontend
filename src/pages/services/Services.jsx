import React from 'react'
import ServicesDetails from '../../components/servicesdetails/ServicesDetails'
import ServicesHero from '../../components/servicesHero/ServicesHero'
import './services.css'

function Services() {
  return (
    <div className='services'>
      <ServicesHero/>
      <ServicesDetails/>
      <div className='socket flex items-center justify-center py-5'>
      <div className='container flex items-center justify-center'>
          <p className='text-white text-center px-2 md:text-xl'>For more of our major and minor services. Kindly Visit our healthcare senter and meet with our professional doctors</p>
      </div>
      </div>
    </div>
  )
}

export default Services
