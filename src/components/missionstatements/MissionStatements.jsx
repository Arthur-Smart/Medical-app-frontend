import React from 'react'
import SimpleAccordion from '../accordion/SimpleAccordion'
import './missionstatement.css'

function MissionStatements() {
  return (
    <div className='mission-statement flex flex-col items-center justify-center '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101C37" fill-opacity="1" d="M0,192L480,64L960,128L1440,32L1440,0L960,0L480,0L0,0Z"></path></svg>

        <div className='container md:-mt-14 flex gap-2 flex-wrap items-center justify-center'>
            <div className='statement-container py-3 px-4 rounded-md'>
                <img src={require('../../assets/vision.png')} alt='' className='statement-icon'/>
                <p className='text-2xl text-slate-700 font-bold'>Our vision</p>
                <p className='text-slate-600'>Looking forward to days where healthcare services will be made affordable to all individuals whether in a position to pay for or not. Making medicine a readly available service by the help of technology and other important asspects for mankind. Looking for to work with many private and public economic sectors to embrace health.</p>
            </div>

             <div className='statement-container py-3 px-4 rounded-md'>
                <img src={require('../../assets/mission.png')} alt='' className='statement-icon'/>
                <p className='text-2xl text-slate-700 font-bold'>Our Mission</p>
                <p className='text-slate-600'>Having facility that can handle all health cases amd issues for all. Increase and extend researchc room and laboratories that will be occupied by professionals to invent socition to threat diseases and viruses to the world. To open a medical learning center to train individual professionally who will take after us.</p>
            </div>

             <div className='statement-container py-3 px-4 rounded-md'>
                <img src={require('../../assets/value.png')} alt='' className='statement-icon'/>
                <p className='text-2xl text-slate-700 font-bold'>Our core values and drive</p>
                <p className='text-slate-600'>Honest</p>
                <p className='text-slate-600'>Professional and commited</p>
                <p className='text-slate-600'>Caring and compassionate</p>
                <p className='text-slate-600'>Integrity driven</p>
                <p className='text-slate-600'>Trustworty</p>
                <p className='text-slate-600'>Convinient and available</p>
                <p className='text-slate-600'>Friendly and relational</p>
            </div>
        </div>
        <div className='accordion flex flex-col items-center justify-center mt-9'>
            <div className='container flex flex-col items-center justify-center'>
                 <p className='text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Discover more about us</p>                    
                 <p className='text-center text-white pb-8'>We are open | transparent | truthfull. We have more you can learn about us.</p>                    
                 <SimpleAccordion/>
            </div>           
        </div>
    </div>
  )
}

export default MissionStatements