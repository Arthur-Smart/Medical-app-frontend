import React from 'react'
import './abouthero.css'

function AboutHero() {
  return (
    <div className='about-hero flex items-center justify-center'>
        <div className='container ab-wrapper flex items-center justify-between'>
          <div className='about-hero-text'>
            <p className='font-extrabold text-3xl text-white'>We are made of healthcare professional</p>
              <p className='text-white text-2xl font-medium'>Touching heart by excellent medical services and care. Treating with love and compassion</p>
              <p className='text-white' >Alway having the interest of everyone in the community at heart and as our priority. Looking forward to seeing a society that is well looked after medical wise.
              Remaining commited to health research and other environs related to medicine in order to create a healthy environment even for the future generations
              </p>
              <hr />
              <p className='font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-blue-800 to-purple-200'><i class="fa-solid fa-phone-volume text-white"></i> Click to Consult more</p>
              <button className='py-3 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white font-bold'>Premium chat with a doctor</button>
          </div>

          <div className='about-hero-img flex justify-end'>
            <img src={require('../../assets/daktarichat.png')} alt='' className='hero-image'/>
          </div>
            
        </div>
    </div>
  )
}

export default AboutHero