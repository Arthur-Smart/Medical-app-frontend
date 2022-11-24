import React from 'react'
import './whyus.css'

function WhyUs() {
  return (
    <div className='why-us flex items-center justify-center'>
        <div className='container flex items-center flex-col justify-center py-10'>
            <p className='font-medium text-5xl mb-7 text-center px-2'>Why they choose Us</p>
            <p className='text-2xl text-center px-2'>Your health is our priority.<span className='text-cyan-400'>We look to see that you and your family</span>  are well covered</p>
            <div className='container why-wrapper mt-6 flex items-center justify-between'>
                <div className='why-us-left flex flex-wrap items-center justify-center gap-5 p-3'>
                    <div className='why-cont rounded-md p-4'>
                        <div className='flex items-center icon-text'>
                            <p className='font-bold text-2xl text-slate-800'>Professional Doctors</p>
                            <div className='why-us-icon ml-5 flex items-center justify-center '>
                                <p><i class=" text-cyan-600 fa-solid fa-user-doctor icon-why"></i></p>
                            </div>
                        </div>
                        <p className='mt-4'>A mark of knowledge on what we do is what you need.We are not putting a trial and error thing with your health.
                        We are committed for your safety and life. Professionalism has been our drive. Care and concern adds up to our values
                        </p>
                    </div>

                    <div className='why-cont rounded-md p-4'>
                        <div className='flex items-center icon-text'>
                            <p className='font-bold text-2xl text-slate-800'>Successful surgeries</p>
                            <div className='why-us-icon ml-5 flex items-center justify-center '>
                                <p><i class="text-cyan-600 icon-why fa-solid fa-clipboard-check"></i></p>
                            </div>
                        </div>
                        <p className='mt-4'>From both internal and outsourced doctors, we long to seen that everyone has been attended to fully in all matters that concerns
                         medical surgeries. We have done expensive research on safe surgery procedure to ensure their is a zero rate death records
                        </p>
                    </div>

                     <div className='why-cont rounded-md p-4'>
                        <div className='flex items-center icon-text'>
                            <p className='font-bold text-2xl text-slate-800'>Genuine Medication</p>
                            <div className='why-us-icon ml-5 flex items-center justify-center '>
                                <p><i class="text-cyan-600 icon-why fa-solid fa-vials"></i></p>
                            </div>
                        </div>
                        <p className='mt-4'>We ensure that the right medicines have been prescribed to you. Taking of wrong medicines can lead to other health complication. We have a pharmacy set up with trained
                         pharmacist to give you medicines that changes your health
                        </p>
                    </div>

                    <div className='why-cont rounded-md p-4'>
                        <div className='flex items-center icon-text'>
                            <p className='font-bold text-2xl text-slate-800'>Patients Follow up</p>
                            <div className='why-us-icon ml-5 flex items-center justify-center '>
                                <p><i class="text-cyan-600 icon-why fa-solid fa-bed-pulse"></i></p>
                            </div>
                        </div>
                        <p className='mt-4'>We don't just treat, we assign a stuff to individual with  critical medical situations to look after and listen for his/her progress
                         even after the treatment. This is to ensure that no more complication will come to that individual
                        </p>
                    </div>
                </div>
                <div className='why-us-right rounded-md'>
                    <p className='text-center font-bold text-2xl text-cyan-600'>Our <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-violet-800'>Clinics</span> Calenda</p>
                    <div className='flex flex-col items-center '>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>Pediatrics Outpatient</p>
                            <p>Everyday(8am – 5pm)</p>
                        </div>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>Optical Clinic</p>
                            <p>Every Monday&Friday(10am – 2pm)</p>
                        </div>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>Dental clini</p>
                            <p>Every Tue & Thur(8am – 2pm)</p>
                        </div>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>Pediatrics Outpatient</p>
                            <p>Everyday(8am – 2pm)</p>
                        </div>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>ANC clinic</p>
                            <p>Wednesday(12noon – 5pm)</p>
                        </div>
                        <div className='flex justify-between clinic-wrapper p-4 '>
                            <p className='font-medium'>Obs & Gyn Clinic</p>
                            <p>Every Thur & Sat(12noon – 4pm)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs