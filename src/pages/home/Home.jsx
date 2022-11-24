import React from 'react'
import AboutSection from '../../components/aboutsection/AboutSection'
import Appointment from '../../components/appointment/Appointment'
import Carousel from '../../components/carousel/Carousel'
import Doctors from '../../components/doctors/Doctors'
import Hero from '../../components/hero/Hero'
import HomeCare from '../../components/homecare/HomeCare'
import HomeContact from '../../components/homecontact/HomeContact'
import Pharmacy from '../../components/pharmacy/Pharmacy'
import SubServices from '../../components/subservices/SubServices'
import Surgery from '../../components/surgery/Surgery'
import Testimonial from '../../components/testimonial/Testimonial'
import Updates from '../../components/updates/Updates'
import WhyUs from '../../components/whyus/WhyUs'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <Hero/>
        {/*<VideoChart/>*/}
        <SubServices/>
        <AboutSection/>
        <Surgery/>
        <Doctors/>
        <Updates/>
        <WhyUs/>
        <Carousel/>
        <Pharmacy/>
        <Appointment/>
        <HomeCare/>
        <Testimonial/>
        <HomeContact/>
     </div>
  )
}

export default Home
