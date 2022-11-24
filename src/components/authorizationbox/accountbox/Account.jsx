import React, {useState} from 'react'
import Login from '../login/Login'
import { motion } from "framer-motion"
import './account.css'
import { AccountContext } from '../AccountContext'
import Signup from '../signup/Signup'

const  backdropVariants = {
    expanded: {
        width:"233%",
        height:'1050px',
        borderRadius:"20%",
        transform:"rotate(60deg)"
    },
    collapsed:{
        width:"160%",
        height:"550px",
        borderRadius:"50%",
        transform:"rotate(60deg)"
    }
}

const expandTransition = {
    type:"spring",
    duration:2.3,
    stiffness:30
}

export function Account({setShowForm}){
    const [expanded, setExpanded] = useState(false);
    const [active, setActive] = useState('signup')

    const handleForm = () => {
        setShowForm(false)
    }

    const expandAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
           setExpanded(false) 
        }, expandTransition.duration * 1000 - 1500)
    }

    const  switchToSignup = () =>{
        expandAnimation();
        setTimeout(() => {
            setActive('signup')
        }, 500)
    }

     const  switchToSignin = () =>{
        expandAnimation();
        setTimeout(() => {
            setActive('signin')
        }, 500)
    }

    const contextValue = {switchToSignup, switchToSignin}

    return ( 
        <AccountContext.Provider value = {contextValue}>
            <div className='account'>
                <div className='top-container'>
                    <motion.div initial={false} transition={expandTransition} animate={expanded ? 'expanded' : 'collapsed'} variants={backdropVariants} className='back-drop'/>
                    {active === 'signin' && (
                        <div className='header-container'>
                        <div onClick={handleForm}  className='cursor-pointer mb-3'><i class=" text-white fa-solid fa-circle-xmark fa-2x"></i></div>
                        <p className='text-sm font-bold text-cyan-900'>Your health our concern <i class="fa-solid fa-heart-circle-plus"></i></p>
                        
                        <p className='font-extrabold text-3xl text-white'>Sigin in your medical account</p>
                        <p className='text-white'>Please fill in the fields below to continue</p>
                    </div>
                    )}

                    {active === 'signup' && (
                        <div className='header-container'>
                        <div onClick={handleForm} className='cursor-pointer mb-3'><i class=" text-white fa-solid fa-circle-xmark fa-2x"></i></div>
                        <p className='text-sm font-bold text-cyan-900'>Healthcare made possible <i class="fa-solid fa-heart-circle-plus"></i></p>
                        <p className = 'font-extrabold text-3xl text-white'>Create a medical Account</p>
                        <p className='text-white'>Please fill in the fields below to continue</p>
                    </div>
                    )}
                    
                </div>
                <div className='inner-container'>
                    {active === 'signin' && <Login setExpanded={setExpanded}/>}
                    {active === 'signup' && <Signup/>}
                </div>
            </div>
    </AccountContext.Provider>
    )
}