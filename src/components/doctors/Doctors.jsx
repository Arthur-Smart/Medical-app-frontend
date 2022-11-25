import React from 'react'
import { doctorsArray } from './data'
import {Link} from 'react-router-dom'
import './doctors.css'

function Doctors() {
  const slicedData = doctorsArray.slice(0, 3)
  console.log(slicedData)
  return (
    <div className='doctors flex flex-col items-center justify-center py-5'>
    <p className='text-3xl px-1 font-bold mb-4 text-slate-700 text-center'>Meet our doctors, <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800'>professionalism</span> made real</p>
    <div className="flex items-center gap-2">
        <div className='line2 bg-cyan-500'></div>
        <div className='rotate flex items-center justify-center bg-cyan-500'>
            <i class="fa-solid fa-user-nurse text-white"></i>
        </div>
        <div className='line2 bg-cyan-500'></div>
    </div>
        <div className='container flex flex-wrap items-center justify-center gap-2 mt-3'>
        {slicedData.map((d) =>(
                <div className='single-doctor '>
                <div className='flex items-center p-2 justify center'>
                    <div className='icon-holder flex items-center justify-centers ml-3 bg-cyan-500'> <i class="fa-solid fa-tooth text-white"></i></div>
                    <p className='ml-2'><span className='font-bold text-xl text-slate-700'>{d.name}</span> - {d.position}</p>
                </div>
                <img src={d.pic} alt='' className='doctor-img'/>
                <div className='text-icon p-2'>
                    <p className='font-bold text-lg text-slate-700 '>Profile</p>
                    <p>{d.profile}</p>
                    <p className='text-slate-700 text-lg font-medium'>{d.department} <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i></p>
                    <div>
                        <i class="fa-brands fa-linkedin fa-2x text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                        <i class="fa-brands fa-square-facebook fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                        <i class="fa-brands fa-square-instagram fa-2x ml-2 text-cyan-500 cursor-pointer hover:text-cyan-400"></i>
                    </div>
                </div>                
            </div>
        ))}
            
        </div>
        <Link to='/about'><button className='py-3 px-5 border-2 border-sky-300 rounded-md mt-4 hover:bg-sky-300 font-medium text-slate-600'>All our doctors</button></Link>
    </div>
  )
}

export default Doctors
