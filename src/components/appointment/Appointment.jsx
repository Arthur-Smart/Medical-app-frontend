import React, {useState} from 'react'
import axios from "axios"
import './appointment.css'

function Appointment() {
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [date, setDate] = useState("")
   const [category, setCategory] = useState("")
  
   const handleBooking = async() => {
        const data = await axios.post('https://medical-app.onrender.com/api/appointments', {
            name,
            phone,
            date,
            category
        })
        setName("")
        setPhone("")
        setDate("")
        setCategory("")
    }

  return (
    <div className='appointment flex flex-col items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e3f2ff" fill-opacity="1" d="M0,128L720,32L1440,96L1440,0L720,0L0,0Z"></path></svg>
        <div className=' container flex flex-col items-center justify-center appointment-wrapper'>
            <div className='appointment-top flex flex-col items-center justify-center'>
                <p className='font-extrabold text-center text-transparent text-3xl md:text-5xl bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 drop-shadow-lg'>Book an appointment with us</p>
                <p className='text-white text-lg px-1 text-center'>Let us assign and prepare our doctors before meeting with you. Avoid risks of<br /> coming while the doctor is held with another patiate.</p>
            </div>
            <div className='input-holder flex flex-col items-center items-center justify-center'>
                <input type='text' placeholder='Enter full name eg.Stephen Kimani' onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Enter phone number eg.0700000001' onChange={(e) => setPhone(e.target.value)}/>
                <input type='date' placeholder=''  onChange={(e) => setDate(e.target.value)}/>
                <select name="category" onChange={(e) => setCategory(e.target.value)}>
                    <option>--Select clinic--</option>
                    <option value='paediatric'>Paediatric</option>
                    <option value='maternity'>Maternity</option>
                    <option value='orthopaedic'>Orthopaedic</option>
                    <option value='dental'>Dental</option>
                    <option value='optical'>Optical</option>
                    <option value='consultancy'>Consultancy</option>
                </select>
                <button onClick={handleBooking} className='text-white w-full rounded-md py-4 px-3 bg-gradient-to-r from-cyan-500 to-blue-500'>Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default Appointment
