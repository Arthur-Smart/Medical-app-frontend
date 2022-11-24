import React, {useContext, useState} from 'react'
import { AccountContext } from '../AccountContext'
import {useDispatch} from 'react-redux'
import axios from "axios"
import './login.css'
import { loginFail, loginStart, loginSuccess } from '../../redux/userSlice'
import {useNavigate } from 'react-router-dom'

function Login() {

  const {switchToSignup} =  useContext(AccountContext);
  const [inputs, setInputs] = useState({
    email:"",
    password:""});
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
   setTimeout(() =>{
    setError(null)
    setSuccess(false)
   }, 5000)

  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name]:e.target.value}));
   } 
   
  const handleLogin = async() =>{
    dispatch(loginStart())
    try {
      const response = await axios.post('https://medical-app.onrender.com/api/auth/login', inputs)
      dispatch(loginSuccess(response.data))
      localStorage.setItem("token",  response.data.accessToken)
      //navigate('/products')
      setSuccess(true)
    } catch (err) {     
      setError(err.response.data.message)
      dispatch(loginFail)
    }
  } 

  //console.log(error)

  return (
    <div className='box-container2'>    
        <div className='form-container'>
            <input className='account-input rounded-md mb-2' type='email' name="email" onChange={handleChange}  defaultValue={''} placeholder='enter email'/>
            <input className='account-input rounded-md mb-2' type='password' name="password" onChange={handleChange} placeholder='Enter password'/>
            <p className='text-center'>Forgot password? <span className=' cursor-pointer text-yellow-400'>Reset password</span></p>
            <button onClick={handleLogin} className="py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md">SignIn</button>
            {success && <p className='text-center text-lime-500'>You are now logged in. Close the model to procceed <i class="fa-solid fa-thumbs-up"></i></p>}
            {error && <p className='text-center text-red-400 '>{error} <i class="fa-solid fa-circle-exclamation"></i></p>}
            <p className='text-center mt-2'>Don't have an account? <span onClick={switchToSignup} className='font-bold cursor-pointer text-yellow-400'>Sign up</span></p>
        </div>
    </div>
  )
}

export default Login