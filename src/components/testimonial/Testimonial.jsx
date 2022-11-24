import React from 'react'
import './testimonial.css'

function Testimonial() {
  return (
    <div className='testimonial flex flex-col items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#101C37" fill-opacity="1" d="M0,32L720,64L1440,160L1440,0L720,0L0,0Z"></path></svg>
        <div className='container testimonial-main flex flex-col items-center justify-center'>
            <p className='text-5xl text-center px-2 font-medium py-4 font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-violet-800'>What the nation is saying about us</p>
            <p className='text-center px-2'>Its a matter of people life that we are proud. We take no vain praises when your live is at risk. Its a matter of people life that we are proud. We take no vain praises when your live is at risk. Its a matter of people life that we are proud. We take no vain praises when your live is at risk</p>
            <div className='container testimonial-wrapper flex flex-wrap items-center justify-center gap-4 '>
                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/woman3.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Tracy Mwangi</p>
                    <p className=' px-4 text-xl font-medium'>Maternity services</p>
                    <p className=' px-4'>They are really awesome. My deliverly was made safe and possible because of their proficiency in services. A big thank you to Boresha Afya health care.</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>

                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/man3.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Joshua Okoth</p>
                    <p className=' px-4 text-xl font-medium'>Paediatric services</p>
                    <p className=' px-4'>My child recieved the best Paediatric services at Boresha Afya. All things to do with a child was given to my son.</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>

                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/man1.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Peter Kioko</p>
                    <p className=' px-4 text-xl font-medium'>Orthopaedic services</p>
                    <p className=' px-4'>Boresha Afya are professionals in what they do. I had back pain which had been a disturbing factor but they attended to it in a more profound and professional manner</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>

                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/woman1.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Stella Njoki</p>
                    <p className=' px-4 text-xl font-medium'>Paediatric Services</p>
                    <p className=' px-4'>My little daughter had some eye problems. Experienced difficulties in sight. Thanks to team Boresha Afya Health care for a successful operation and restoring a clear sight to her.</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>

                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/man2.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Collins Mwangi</p>
                    <p className=' px-4 text-xl font-medium'>Dental services</p>
                    <p className=' px-4'>They are really are fast, professional and caring. After many sleepless night due to a tooth ache, I went to Boresha Afya and they attended to my dental need very well</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>

                <div className='testimonial-card flex flex-col '>
                    <div className='avatar bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
                        <img className='avatar-img' src={require('../../assets/woman2.jpg')} alt=''/>
                    </div>
                    <p className='text-center mt-11 py-2 font-bold text-3xl text-sky-500'>Mercy Odongo</p>
                    <p className=' px-4 text-xl font-medium'>General services</p>
                    <p className=' px-4'>Good in healthcare services and loving. The doctor are just friendly and humbled. They make you feel a great sense of belonging. All thanks to Boresha Afya Healthcare</p>
                    <div className='flex px-4'>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                        <i class="fa-solid fa-star text-yellow-300 "></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial