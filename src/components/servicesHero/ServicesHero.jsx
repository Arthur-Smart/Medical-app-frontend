import React from 'react'
import './serviceshero.css'

function ServicesHero() {
  return (
    <div className='servicehero flex flex-col items-center justify-center'>
        <div className='container flex flex-col items-center justify-center'>
            <div className='service-hero-top flex items-center justify-between'>
            <div className='servicehero-left flex items-center justify-center'>
                <img src={require('../../assets/daktarichat.png')} alt='' className='service-hero'/>
            </div>
            <div className='servicehero-right'>
                <p className='text-zinc-200 service-text text-xl font-medium'>All services for all health issues</p>
                <p className='font-extrabold service-text text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Safe surgical Operations and other medical services</p>
                <p className='text-zinc-200 service-text mt-3'>Boresha Afya is a certified healthcare center. We have a track record of success in operations and other medical services. We are commited to see that the health of all individual is well looked into. We also have well maintained and fully furnished medical room to ensure all services are offered at a conducive environment.</p>
                <p className='my-4 text-indigo-900 service-text font-bold text-xl'>Center of Health</p>
                <a href='#services' className='text-white service-text font-bold py-3 px-5 mt-7 rounded-md border-2 border-white hover:bg-white hover:text-indigo-900'>Get started</a>
            </div>
            </div>
            <div className='service-hero-bottom bg-sky-800 flex p-2 rounded-md'>
                <div className='service-bottom-left flex flex-row'>
                    <div className='service-bottom-img flex items-center justify-center'><p><i class="fa-brands fa-medrt"></i></p></div>
                    <div className='bottom-left-desc'>
                        <p className='text-white font-bold text-xl'>Medicine and Health</p>
                        <p className='text-white'>Medicine aims to prevent disease plus prolong life; the idea of medicine is to eliminate the need of a physician</p>
                    </div>
                </div>
                <div className='service-bottom-right flex flex-row'>
                    <div className='service-bottom-img flex items-center justify-center'><p><i class="fa-solid fa-user-minus"></i></p></div>
                    <div className='bottom-left-desc'>
                        <p className='text-white font-bold text-xl'>Calmness and Love</p>
                        <p className='text-white'>A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesHero