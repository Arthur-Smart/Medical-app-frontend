import React, {useState} from 'react'
import axios from 'axios'
import './updates.css'

function Updates() {
    const [show, setShow] = useState(false)
    const [inputs, setInputs] = useState({
    name:"",
    phone:""
   })
    
    const handleChange = (e) =>{
        setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
    }

    const handleRegister = async() => {
        const data = await axios.post('http://localhost:5000/api/updates', inputs)
        console.log(data)
        setShow(false)
    }

  return (
    <div className='updates flex  items-center justify-center'>
        <div className='container flex flex-col items-center justify-center'>
            <p className='text-center font-bold text-6xl  text-white'>Our upcoming <span className='font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-pink-800'>medical</span> events</p>
            <p className='mt-3 text-white text-center text-lg'>We are committed to ensure that you do not miss any of our medical offers and events</p>
            <div className='container update-wrapper gap-3.5 mt-4 flex items-center justify-center'>
                <div className='update-container rounded-md'>
                    <img className='update-img' src={require('../../assets/camp1.jpg')} alt=''/>
                    <div>
                        <p className='text-center text-2xl font-semibold uppercase text-sky-600'>Free medical camp</p>
                        <div className='flex items-center justify-around mt-2'>
                            <p className='text-stone-800 text-lg'><b>Venue</b> Nakuru Hall</p>
                            <p className='text-stone-800 text-lg'><b>Date</b> 12/11/2022</p>
                            <p className='text-stone-800 text-lg'><b>Time</b> 2:00pm - 5:00pm</p>
                        </div>
                    </div>
                    
                </div>

                 <div className='update-container rounded-md'>
                    <img className='update-img' src={require('../../assets/camp2.jpg')} alt=''/>
                    <div>
                        <p className='text-center text-2xl font-semibold uppercase text-sky-600'>Maternity Consultation</p>
                        <div className='flex items-center justify-around mt-2'>
                            <p className='text-stone-800 text-lg'><b>Venue</b>Nairobi Field</p>
                            <p className='text-stone-800 text-lg'><b>Date</b> 12/30/2022</p>
                            <p className='text-stone-800 text-lg'><b>Time</b> 10:00am - 2:00pm</p>
                        </div>
                    </div>
                    
                </div>
           
           
            </div>

            <p className='mt-4 text-white text-center text-2xl font-light'>Are you planning to attended to one of our above events? Please register via the button below</p>
            <button onClick={()=> setShow(!show)} className='rounded-md py-4 px-10 bg-yellow-400 hover:bg-sky-600 hover:text-white'>Register here</button>
          { show &&
            <div className='inputs-update flex flex-col items-center justify-center'>
                <input className='rounded-md' type='text' placeholder='Enter your name' name="name" onChange={handleChange}/>
                <input className='rounded-md' type='text' placeholder='Enter your phone' name="phone" onChange={handleChange}/>
                <button onClick={handleRegister} className='py-3 px-5 border-2 border-sky-300 rounded-md mt-4 hover:bg-sky-300 font-medium text-white hover:text-slate-600'>Submit</button>
            </div>
          }  
        </div>
    </div>
  )
}

export default Updates