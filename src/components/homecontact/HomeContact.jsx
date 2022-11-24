import React from 'react'
import './homecontact.css'

function HomeContact() {
  return (
    <div className='homecontact flex items-center justify-center'>
        <div className='container contact-wrapper flex items-center justify-center'>
            <div className='left-homecontact'>
                <div className='line'></div>
                <p className='md:mt-10 text-white text-2xl'>Allow us to <span className='font-bold text-4xl'>start attending</span> < br/>to you health
                today</p>
            </div>
            <div className='right-homecontact gap-4 flex justify-between items-center'>
                <div className='right-card'>
                    <p className='text-bold text-white font-bold text-2xl'>Talk to us today</p>
                    <p className='mt-2 text-white' >Whether you have  questions about Boresha afya, let us now in the section here. Any inquiry you'd like to make let us know. Contact us.</p>
                    <p className='mt-2 text-white font-medium' ><i class="fa-solid fa-envelope-circle-check"></i> boreshaafya@gmail.com | <i class="fa-solid fa-square-phone"></i> +245 789 689 623</p>
                </div>
                <div className='right-card'>
                    <p className='text-bold text-white font-bold text-2xl'>Sign up for our medplan</p>
                    <p className='mt-2 text-white' >Sign up for our medical plan. Get an exclusive medical offer by becaming a member of Boresha Afya. Get you family cover also with the medical plan</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContact