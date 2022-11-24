import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useLocation} from 'react-router'
import {Link} from 'react-router-dom'
import axios from "axios"
import './maincart.css'

function MainCart() {
    const [pay, setPay] = useState(false)
    const {currentUser} = useSelector(state=>state.user)
    const {quantity, products} = useSelector(state=>state.cart)
    const  userId = currentUser._id
    const [cartData, setCartData] = useState([]) 
    console.log(cartData)

    const numOfProducts = cartData.length
    console.log(currentUser.accessToken)

   
    useEffect(() => {
        const fectchedItems = async() => {
            const response =await axios.get(`https://medical-app.onrender.com/api/orders/order/${userId}`)
            setCartData(response.data)
        }
        fectchedItems()
    },[])

    const total = (cartData.reduce((acc, item) => (acc +=parseInt(item.cost)), 0 ))
    console.log(total)

    const handleDelete = async(ID) => {
       try {
        await axios.delete(`https://medical-app.onrender.com/api/orders/order/${ID}`)
        window.location.reload()
       } catch (err) {
        console.log(err)
       }
    }
    
  return (
    <div className='maincart flex flex-col items-center justify-center'> 
   
        <div className='cart-header py-5 bg-gray-200 flex items-center justify-center'>
            <div className='container'>
                <p className='text-center text-xl text-gray-600 font-medium'>Hello {currentUser?.name}. This is your cart. You have {numOfProducts} medical products</p>
            </div>
        </div>        
        <div className='container table-cost flex justify-between'>
        
         <div className='table container'>
            <table>
                <thead>
                    <tr>
                        <th className='text-gray-600' >Medical product</th>
                        <th className='text-gray-600' >Quantity</th>
                        <th className='text-gray-600' >Price</th>
                        <th className='text-gray-600' >Delete</th>
                    </tr>
                </thead>
               
                <tbody  >  
                {cartData.map((cd) => (             
                        <tr className='md-table'>
                         
                            <td>
                            <div className='flex td items-center'>
                                <img src={cd.productImg} alt='' className='table-img'/>
                                <div className='ml-2'>
                                    <p className='font-bold text-xl text-gray-600'>{cd.title}</p>
                                    <p className='-mt-1 text-gray-600'>2 times a day</p>
                                    <p className='-mt-1 text-gray-600'>Expires on 12/12/2022</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type='string' value={cd.qty} className='border-slate-200 border-2 outline-none py-2 rounded-md'/>
                        </td>
                        <td>
                            <p className='font-bold text-xl text-gray-600'>Kes {cd.cost}</p>
                            <p className='-mt-1 text-gray-600'>Kes {cd.cost / cd.qty } each</p>
                        </td>
                        <td>
                        <p onClick={() =>handleDelete(cd._id)} className='cursor-pointer'><i class="fa-regular fa-trash-can fa-2x text-red-700"></i></p>
                        </td>                      
                        
                    </tr>  
                    ))}                            
   
                </tbody>
            </table>
        </div>
        <div className='charges-container flex flex-col items-start   py-5'>
            <div className='c-container-top flex flex-col items-center justify-center border-slate-200 border-2 outline-none py-2 rounded-md'>
                <p>Do you have a coupon?</p>
                <input className='border-slate-200 border-2 outline-none py-2 px-2  rounded-md' type='text' placeholder='Coupon code'/>
            </div>

            <div className='c-container-top border-slate-200 fleex flex-col items-center justify-center border-2 outline-none py-2 px-2 mt-3 rounded-md'>
                <div className='flex items-center justify-between'>
                <p className='mb-4' ><strong>Total price:</strong></p>
                <p className='mb-4' >Kes {total}</p>
                </div>
                
                <div className='flex items-center justify-between'>
                <p className='mb-4' ><strong>Discount:</strong></p>
                <p className='mb-4' >Kes 300</p>
                </div>
                
                <div className='flex items-center justify-between'>
                <p className='mb-4' ><strong>Total:</strong></p>
                <p className='mb-4 font-bold text-xl'>Kes {total - (numOfProducts  <= 0 ? 0 : 300)}</p>                
                </div> 
                <button disabled className='reciet-btn border-slate-200 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-600 font-medium border-2 outline-none py-2 rounded-md px-4'>Print Reciet</button>               
            </div>
        </div>
        </div>

        <div className='container m-c-btns flex items-center justify-between mt-4 px-4 py-2'>
           <Link to='/'> <button className='border-slate-200 text-gray-600 font-medium border-2 outline-none py-2 rounded-md px-4'><i class="fa-solid fa-chevron-left"></i> Continue shopping</button></Link>
            <button onClick={() => setPay(true)} className='py-2 px-4 bg-gradient-to-r p-btn from-cyan-500 to-blue-500 text-white font-medium rounded-md'> Proceed to payment <i class="fa-solid fa-chevron-right"></i></button>
        </div>

        <div  className= {pay ? 'payments show flex flex-col items-center  justify-center' : 'payments flex flex-col items-center  justify-center'}>
            <div onClick={() =>setPay(false)}><p className='cursor-pointer text-gray-500'><i class="fa-solid fa-circle-xmark fa-2x "></i></p></div>
            <img src={require('../../assets/mpesa.png')} alt='' className='mpesa-icon'/>
            <p><strong>Amount to pay: Kes {total - 300} </strong></p>
            <input className='rounded-md py-2 mb-3 px-4 outline-0' type='text' placeholder='Enter phone number'/>
            <button className='payment-btn py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md'> Continue with payment</button>
        </div>
    </div>
  )
}

export default MainCart