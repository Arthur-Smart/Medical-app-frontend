import React from 'react'
import { doctorsArray } from '../doctors/data'

import './juniorteam.css'

function JuniorTeam() {
const slicedData = doctorsArray.slice(3, 9)
  return (
    <div className='junior-team flex flex-col pb-4 items-center justify-center pt-5'>
        <p className='font-bold text-3xl  py-3 text-white text-center'>Our departmental Team Lead</p>
        <div className='container  flex flex-wrap gap-2 items-center justify-center'>
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
        <button className='bg-transparent border-2 border-white rounded-md py-3 px-5 mt-4 font-bold text-white hover:bg-cyan-500 hover:border-cyan-500'>Load more</button>
    </div>
  )
}

export default JuniorTeam