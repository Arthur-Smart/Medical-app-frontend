import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import { Account } from '../authorizationbox/accountbox/Account'
import Form from '../form/Form'
import { Icons } from './data'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
const linkIcons = Icons
const [showForm, setShowForm] = useState(false)
const [open, setOpen] = useState(false)
 const {currentUser} = useSelector(state => state.user)

  return (
    <div className='navbar flex flex-col items-center justify-center'>
    {showForm && (
        <div className='form-holder'>
        <Account setShowForm={setShowForm}/>
    </div>
    )}
        <div className='nav-wrapper-top'>
            <div className='social-links'>
                {linkIcons.map((i) => (
                       <a href='https://web.facebook.com/profile.php?id=100064319250841' target='_blank'><p className='ml-2 cursor-pointer text-sky-300 hover:text-sky-500 '>{i.img}</p></a> 
                ))}
            </div>
            <div className='moving-text flex items-center justify-center'>
                <div className="topBarTextWrapper">
                    <div className="topBarTextItem">Center of Health and counselling issue<i className="fas fa-ambulance icons"></i></div>
                    <div className="topBarTextItem">Safe surgical Operations and maternity deliverly <i className="fas fa-stethoscope icons"></i></div>
                    <div className="topBarTextItem">Top medical career programs and medical technical skills <i className="fas fa-notes-medical icons"></i></div>
                    <div className="topBarTextItem">Well maintained laboratory equipments  <i class="fas fa-flask icons"></i></div>
                    <div className="topBarTextItem">Approved and cheap medical drugs with quick deliverly <i className="fas fa-pills icons"></i> </div>
                </div>
            </div>
            <div className='button '>
                <button onClick={() => setShowForm(true)} className='text-white button-btn font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md  py-3 px-10'>Med-Signup</button>
            </div>
        </div>
        <div className='nav-wrapper-bottom'>
            <div className='logo text-2xl font-bold text-white'><Link to='/'>Boresha <i class="fa-solid fa-circle-plus"></i></Link></div>
            <div className='date-time text-white flex flex-row items-center justify-center'>
                <ul className='flex items-center justify-center'>
                    <Link to='/'><li className='ml-11 text-lg cursor-pointer font-light' >Home</li></Link> 
                    <Link to='/about'><li className='ml-11 text-lg cursor-pointer font-light' >About us</li></Link> 
                    <Link to='/services'> <li className='ml-11 text-lg cursor-pointer font-light' >Services</li></Link>
                    <Link to='/achievements'><li className='ml-11 text-lg cursor-pointer font-light' >Achievements</li></Link> 
                    <Link to={`/cart/${currentUser?._id}`} ><li className='ml-11 text-lg cursor-pointer font-light' >Your cart <i class="fa-solid fa-cart-plus"></i></li></Link>
                </ul>
            </div>
            <div onClick={() => setOpen(true)} className='menu'>
              <i className="fa-solid fa-bars-staggered text-white fa-2x cursor-pointer"></i>
            </div>

            {/*Mobile menu */}
            <div className={open ? 'mobile-menu show' : 'mobile-menu'}>
                <div className='flex w-full px-2 mb-7 mt-3 items-center justify-between'>
                    <div>
                        <p className='font-bold text-2xl'>Boresha <i class="fa-solid fa-circle-plus"></i></p>
                    </div>
                    <p onClick={() => setOpen(false)} className='cursor-pointer'><i class="fa-solid fa-circle-xmark fa-2x"></i></p>
                </div>
                <div className='items-wrapper px-2 flex flex-col  items-start justify-start'>
                   <Link to='/' onClick={() => setOpen(false)}> <div className='mobile-item'>
                        <div><img src={require('../../assets/home-icon.png')} alt=''/></div>
                        <p>Discover more about us. Check our medical programms</p>
                    </div> </Link> 
                    
                    <Link to='/about' onClick={() => setOpen(false)}> <div className='mobile-item'>
                    <div><img src={require('../../assets/about-icon.png')} alt=''/></div>
                    <p>We are made of professional. Check our team and facts</p>
                    </div> </Link>

                    <Link to='/services' onClick={() => setOpen(false)}> <div className='mobile-item'>
                         <div><img src={require('../../assets/services-icon.png')} alt=''/></div>
                        <p>Professional medical services re-defined</p>
                    </div></Link>
                    
                   <Link to='/achievements' onClick={() => setOpen(false)}> <div className='mobile-item'>
                       <div><img src={require('../../assets/medal-icon.png')} alt=''/></div>
                        <p>Check our track record of success in medical health</p>
                    </div></Link>
                     
                   <Link to={`/cart/${currentUser._id}`} onClick={() => setOpen(false)} > <div className='mobile-item'>
                        <div><img src={require('../../assets/cart-icon.png')} alt=''/></div>
                        <p>Purchase and payment. Check your cart</p>
                    </div> </Link>
                        
                </div>
            </div>
            {/*End of Mobile menu */}
        </div>
    </div>
  )
}

export default Navbar
