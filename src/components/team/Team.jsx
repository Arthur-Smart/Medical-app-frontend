import React from 'react'
import './team.css'

function Team() {
  return (
    <div className='team py-10 flex flex-col items-center justify-center'>
        <p className='text-3xl px-1 md:text-5xl font-extrabold  text-center text-slate-700'>Meet our amaizing <span className='font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>healthcare team</span></p>
        <p className='text-slate-600 text-lg mt-2 px-1 text-center '>Always committed to ensure your healthcare nneds are attended to ASAP</p>
      <div className='team-wrapper mt-10 flex flex-col items-center justify-center'>
           <div className='container doctor-details flex items-center justify-center'>
          <div className='team-left flex items-center justify-start'>
              <img src={require('../../assets/doctor.jpg')} alt='' className='team-img'/>
          </div>
          <div className='team-right'>
            <div className=' flex items-center title-header'>
              <p className='font-bold text-2xl text-cyan-600'>CEO & Senior Director</p>
              <div className='icon-holder flex items-center justify-centers ml-3 bg-cyan-500'> <i className="fa-solid fa-syringe  text-white"></i></div>
            </div>

              <p className='text-slate-700 px-1'>I am Emmaculate Wangui. The CEO and founder of Boresha Afya Healthcare. After graduating from Moi University as a medical student, I started Boresha Afya Healthcare. I was the longing of my heart to bring my training 
              in medicine to the world and see the life of many individuals experiencing different sicknesses come to a point of healing and regaining of health. I thank my team as well. It has been cooperative and collaborative. I like their zeal and selflessness to see that everyone
               is attended to in the most profound way. The government as well has been of greet help to the raising of the healthcare. They have founded our programs in a great way. I also appreciate the public and society also for their continuos trust in us. They have believed in our health services and embrace
                our medical free programs as well. 
              </p>
            <hr/>
            <div className='name-social mt-3'>
              <p className='font-medium text-lg'>Emmaculate Wangui - |She's social follow her|</p>
              <div>
                <i class="fa-brands fa-linkedin fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                <i class="fa-brands fa-square-facebook fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                <i class="fa-brands fa-square-instagram fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
              </div>
            </div>
          </div>   
               
        </div>

        {/*Person 2*/}
        <div className='container doctor-details  mt-8 flex items-center justify-between'>
          <div className='team-left flex items-center justify-end'>
              <img src={require('../../assets/doctor2.jpg')} alt='' className='team-img'/>
          </div>
          <div className='team-right'>
            <div className=' flex items-center title-header'>
              <p className='font-bold text-2xl text-cyan-600'>Senior-Managing Director</p>
              <div className='icon-holder flex items-center justify-centers ml-3 bg-cyan-500'> <i className="fa-solid fa-syringe  text-white"></i></div>
            </div>

              <p className='text-slate-700 px-1'>Am Peter Okoth. The managing director at Boresha Afya Healthcare. I have been here for atleast 7 years working together with immaculate. Boresha Afya has turned out to be a world class health center not because of our efforts alone but also the public and the government also. We have been committed to multiple research projects to aid in easing and bring solutions to different health issues.
               Our facility has grown lately from a 800 capacity holder to 2000 capacity holder. We have different branches countryward which are inhabited by. Me working with Boresha Afya started immediately after I graduated from Nairobi University with a bachelors degreen in dental surgery. Since then it has been a pressure to serve the organization and the society as well. Lets continue taking medicine to the next level with<strong> Boresha Afya Healthcare.</strong>  
               </p>
            <hr/>
            <div className='name-social mt-3'>
              <p className='font-medium text-lg'>Partric Okoth - |He's social follow him|</p>
              <div>
                <i class="fa-brands fa-linkedin fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                <i class="fa-brands fa-square-facebook fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                <i class="fa-brands fa-square-instagram fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
              </div>
            </div>
          </div>   
               
        </div>
        {/*End of person 2*/}
      </div>
       
    </div>
  )
}

export default Team
