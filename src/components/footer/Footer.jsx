import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='footer flex items-center flex-col justify-center'>
        <div className='container py-7 flex flex-wrap px-5 justify-between'>
            <div className='card flex flex-col '>
                <p className='text-2xl font-medium mb-3'>Reach us easily</p>
                <p className='mb-2 text-lg'>tel: +0103245172</p>
                <p className='mb-2 text-lg'>Send an email to us</p>
                <p className='mb-2 text-lg'>01300 Nakuru, Kenya < br/>Kenyatta avenue highway</p>
            </div> 
            <div className='card flex flex-col'>
               <a href='https://web.facebook.com/profile.php?id=100064319250841' target='_blank'><p className='text-2xl font-medium mb-3'>We are social. Follow us</p></a> 
                <p className='mb-2 text-lg'><i class='fab fa-facebook text-stone-600'></i> Facebook</p>
                <p className='mb-2 text-lg'><i class="fa-brands fa-twitter text-stone-600"></i> Twitter</p>
                <p className='mb-2 text-lg'><i class="fa-brands fa-square-instagram text-stone-600"></i> Instagram</p>
                <p className='mb-2 text-lg'><i class="fa-brands fa-linkedin text-stone-600"></i> LinkedIn</p>
                <p className='mb-2 text-lg'><i class="fa-brands fa-square-snapchat text-stone-600"></i> Snapchat</p>
            </div>
            <div className='card'>
                <p className='text-2xl font-medium mb-3'>Quick links</p>
                    <Link to='/'><p className='mb-2 text-lg'>Home</p></Link> 
                    <Link to='/about'> <p className='mb-2 text-lg'>About us</p></Link> 
                    <Link to='/services'> <p className='mb-2 text-lg'>Services</p></Link> 
                    <Link to='/achievements'> <p className='mb-2 text-lg'>Achievement</p></Link> 
            </div>
            <div className='card'>
                <p className='text-2xl font-medium mb-3'>Health up now</p>
                <p className='mb-2 text-lg'>Med-signup</p>
                <p className='mb-2 text-lg'>Catalog</p>
                <p className='mb-2 text-lg'>Donate</p>
               <Link to={`/cart/${currentUser._id}`}><p className='mb-2 text-lg'>Your cart</p></Link> 
            </div>
        </div>
        <div className='pb-7'>
            <p className='text-xl text-center'>&copy;2022 All Rights Reverved. Developed by Exquitech Technologies</p>
        </div>
    </div>
  )
}

export default Footer