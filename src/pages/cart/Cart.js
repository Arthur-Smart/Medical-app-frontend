import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation} from 'react-router'
import axios from 'axios'
import './cart.css'
import { addProduct } from '../../components/redux/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {

    const {currentUser} = useSelector(state => state.user)
    const {products} = useSelector(state => state.cart)
    console.log(products)

    const dispatch = useDispatch()
    
    const [productImg, setProductImg] = useState()
    const [title, setTitle] = useState()
    const [userId, setUserId] = useState(currentUser._id)
    const [data, setData] = useState([])
    const [username, setUsername] = useState(currentUser.name)
    const [useremail, setUseremail] = useState(currentUser.email)
    const [userphone, setUserphone] = useState(currentUser.phone)
    const [qty, setQty] = useState()
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState()
    

    const idLocation = useLocation();
    const path = idLocation.pathname.split("/")[2]    
    const filteredData =  data.find((p) => p._id.toString() === path);
    const relatedProducts = data.filter((d) => d.category.includes(filteredData.category))
    const [cost, setCost] = useState('')
    
    //console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
    //const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken 

    useEffect(() => {
        const fetchedData = async() => {
           const result = await axios.get('https://medical-app.onrender.com/api/med/')
           setData(result.data)
        }
        fetchedData()
    }, []);


    
    const handleAddToCart = async () => {        
    const inputs = {userId, title:filteredData?.title, productImg:filteredData?.imageUrl, qty, cost:filteredData?.cost * qty, username, useremail, userphone, location}
        try {
            const response = await axios.post('https://medical-app.onrender.com/api/orders/order',inputs);
            const data = response.data
            dispatch(addProduct(data))
        } catch (err) {
            console.log(err)
        }   
    }

 

  return (
    <div className='cart flex flex-col items-center justify-center'>
        <div className='container cart-wrap py-4 flex items-center justify-between'>
            <div className='cart-left'>
                <div className='cart-img-container'>
                    <img src={filteredData?.imageUrl} alt=''/>
                </div>
                <div className='cart-details'>
                    <h1 className=' text-3xl font-medium mt-4'>{filteredData?.title}</h1>
                    <p className='text-xl font-medium'>Prescriptions:</p>
                    <p className='text-gray-500'>{filteredData?.description}</p>
                    <p className='text-gray-500 pb-4'>Not sure whether this the right drug for you? Click <a href='/'>here</a> to connect with our doctor</p>

                    < hr/>
                    <div className='mt-4'>
                        <p className='text-gray-600 font-medium'>The default quantity is 1. Set you quantity below</p>
                        <input type='number'   min="0"  placeholder='Enter quantity' className='cart-input' onChange={(e) => setQty(e.target.value)}/>
                        <p className='text-xl  mt-2 font-medium'> <b>Unit price:</b> Kes {filteredData?.cost} </p>
                    </div>
                </div>
            </div>
            <div className='cart-right flex items-start justify-center '>
                <div className='flex flex-col form-wrapper'>
                    <p className='text-center font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Fill in the form below</p>
                    <input type='text' placeholder='Type name eg Joseph Kimani' defaultValue={currentUser.name} />
                    <input type='text' placeholder='Type email eg joshua@gmail.com' defaultValue={currentUser.email} />
                    <input type='text' placeholder='Enter phone eg 0707070707' defaultValue={currentUser.phone} />
                    <input type='text' placeholder='Enter location eg Nakuru , Freearea'  onChange={(e) => setLocation(e.target.value)}/>
                   {/**<input type='text' placeholder='Type name eg Joseph Kimani' value={qty} onChange={(e) => setQty(e.target.value)}/>
                    <input type='text' placeholder='Type name eg Joseph Kimani' onChange={(e) => e.target.value} />*/}
                    <button onClick={handleAddToCart} className='rounded-md text-white mt-4 py-4 px-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-cyan-500 hover:to-blue-500 '>Add paracentamo to cart</button>
                   <Link to={`/cart/${userId}`}> <button className='rounded-md text-cyan-600 mt-4 py-4 px-10 bg-transparent border-2 border-cyan-400 bg-yellow-400'>Check your cart</button></Link> 
                </div>
            </div>
        </div>
        <div className='container py-4'>
            <hr></hr>
            <p className='text-2xl font-bold text-center md:text-start text-stone-800'>Related medical products</p>
            <div className='products-wrapper flex flex-wrap items-center justify-center gap-2 py-2'>
               {relatedProducts.map((rp) => (
                    <div className='single-r-product rounded-md pb-2'>
                    <img src={rp.imageUrl} alt='' className='sigle-r-img'/>
                    <p className='p-1 text-stone-800 font-bold'>{rp.title}</p>
                    <div className='cost-cart p-1 flex items-center justify-between '>
                        <p className='font-bold text-stone-600'>Kes {rp.cost}</p>
                        <Link to={`/products/${rp._id}`}><button className='py-2 px-4 bg-sky-600 text-white rounded-md'>Purchase</button></Link>
                    </div>
                </div>
               )) }
            </div>
        </div>
    </div>
  )
}

export default Cart
