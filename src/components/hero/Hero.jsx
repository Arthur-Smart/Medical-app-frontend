import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './hero.css'
import { useSelector } from 'react-redux';

function Hero() {
  const {currentUser} = useSelector(state=>state.user)
  const [code, setCode] = useState(false)
  console.log(currentUser)
  return (
    <div className='hero flex items-center justify-center'>
        <div className='flex hero-main container justify-between'>
            <div className='hero-left'>
                <p className='line-height hero-text  text-8xl text-white font-medium'>Boresha Afya < br/> <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-violet-800'> Healthcare</span> < br/>here at your reach</p>
                <p className='text-white  px-1 md:px-0 text-center md:text-start'>We have made our medical services accessible at the near reaches. We offer the best healthcare services globally.< br/>We are a tech driven as well to ensure that you are at our nearest reach. Click the Daktari online button to get access < br/> to a doctor.
                We ensure that your family is also covered from the very little to the very old</p>
                <div className='flex items-center online-pharmacy-btn'>
                    <div>
                    <span class="flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                        <button onClick={() => setCode(!code)} className='text-black text-lg bg-yellow-400 hover:bg-sky-600 hover:text-white py-4 px-10 rounded-md'>Daktari Online</button>
                     </div>
                    <a href='#pharmacy'><button className='text-white border-2 ml-4 text-lg bg-transparent hover:bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 hover:border-blue-500 py-4 px-10 rounded-md'>Pharmarcy</button></a>
                </div>
                {code && 
               
                  <div className='mt-2'>
                  <hr/>
                  <p className='text-white'>Input your number to share a conference code</p>
                  <input type='text' className='py-2 px-3 rounded-md outline-0' placeholder='Enter Phone' />
                  <button onClick={() =>setCode(false)} className='py-2 px-3 bg-white ml-3 rounded-md'>Send</button>
                </div>
                }
                
                <div className='flex flex-col justify-start items-center md:items-start mt-7 text-lg '>
                   <div>
                      <p className='text-white text-center md:text-start'>We are national. More than 200+ partners and more than 1000+ reviews</p>
                   </div>
                   <div className='flex justify-start'>
                       <AvatarGroup total={24}>
                            <Avatar alt="Remy Sharp" src={require('../../assets/person1.jpg')} />
                            <Avatar alt="Travis Howard" src={require('../../assets/person2.jpg')} />
                            <Avatar alt="Agnes Walker" src={require('../../assets/person1.jpg')} />
                            <Avatar alt="Trevor Henderson" src={require('../../assets/person2.jpg')} />
                      </AvatarGroup>
                   </div>
                </div>
            </div>
            <div className='hero-right flex justify-end'>
              <img className='hero-right-img' src={require('../../assets/daktari.png')} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Hero
