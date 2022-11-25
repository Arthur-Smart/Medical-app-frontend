import React, {useState, useEffect} from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import './pharmacy.css'

function Pharmacy() {
    const [data, setData] = useState([])
    const [select, setSelect] = useState('');
    const filteredData = (select ==='all' ? data : data.filter((d) => d.category.includes(select)))
    

    useEffect(() => {
        const fetchedData = async() => {
           const result = await axios('https://medical-app.onrender.com/api/med/')
           setData(result.data)
        }
        fetchedData()
    }, [])
  return (
    <div className='pharmacy py-10 flex  items-center justify-center' id='pharmacy'>
    <div className='container flex flex-col items-center justify-center '>
            <p className='font-medium px-1 text-center text-4xl text-slate-800'>Welcome to our <span className='text-cyan-600'>online pharmacy</span>. Duka online </p>
            <p className='text-center px-2'>We have as well given the prescription of every drug. Consult a doctor where you are in doubt</p>
            <div>
                <select className='select rounded-md text-center bg-sky-300 px-3' onChange={(e)=> setSelect(e.target.value)}>
                    <option value='all'>----All Products----</option>
                    <option value='cardiac'>Cardiac</option>
                    <option value='stomach'>Stomach Medicine</option>
                    <option value='pregnancy'>Pregnancy</option>
                    <option value='cold'>Cold & Flue</option>
                </select>
                <div className='container gap-2 flex flex-wrap items-center justify-center'>
                    {filteredData.map((d) => (
                        <div className='rounded-md drug-container '>
                        <img className='drug-img' src={d.imageUrl} alt=''/>
                            <div className='desc-price py-2 px-4'>
                                <h1>{d.title}</h1>
                                <p>{d.description}</p>
                                <div className=' flex items-center justify-between py-2'>
                                    <p className='text-xl font-medium text-cyan-600'>Kes /= {d.cost}</p>
                                   <Link to={`/products/${d._id}`}><button className='purchase text-white font-medium py-4 rounded-md px-10 bg-gradient-to-r from-cyan-500 to-blue-500'>Purchase</button></Link> 
                                </div>
                            </div>
                    </div>
                    ))}                                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pharmacy
