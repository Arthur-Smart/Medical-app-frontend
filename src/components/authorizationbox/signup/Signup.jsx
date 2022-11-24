import React, {useContext, useState} from 'react'
import { AccountContext } from '../AccountContext';
import axios from "axios"

function Signup() {

   const {switchToSignin} =  useContext(AccountContext);
   const [inputs, setInputs] = useState({
    name:"",
    email:"",
    phone:"",
    password:""
   })

   const [error, setError] = useState(null)
   setTimeout(() =>{
    setError(null)
   }, 10000)

   const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
   }

   const handleRegister = async() => {
    try {
      const data = await axios.post('https://medical-app.onrender.com/api/auth/register', inputs)
      switchToSignin()
    } catch (err) {
      setError(err.response.data.message)
    }
   }
   
 return (
    <div className='box-container2'>
        <div className='form-container'>
            <input className='account-input rounded-md mb-2' type='text' name="name" onChange={handleChange} placeholder='Enter fullname'/>
            <input className='account-input rounded-md mb-2' type='text' name="phone" onChange={handleChange}  placeholder='Enter phone number'/>
            <input className='account-input rounded-md mb-2' defaultValue={''} name="email" onChange={handleChange}  type='email' placeholder='Enter email'/>
            <input className='account-input rounded-md mb-2' defaultValue={''} type='password' name="password" onChange={handleChange}  placeholder='Enter password'/>
            
            <button onClick={handleRegister} className="py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md">Sign up</button>
            {error && <p className='text-center text-red-400 '>{error} <i class="fa-solid fa-circle-exclamation"></i></p>}
            <p className='text-center mt-2'>Already have an account? <span onClick={switchToSignin} className='font-bold cursor-pointer text-yellow-400'>Sign in</span></p>
        </div>
    </div>
  )
}

export default Signup