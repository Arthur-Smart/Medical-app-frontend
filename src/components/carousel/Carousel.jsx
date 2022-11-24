import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './carousel.css'

function Carousel() {
  const data = [
    {
      id:1,
      img:require('../../assets/icon1.jpg'),
    },
     {
      id:2,
      img:require('../../assets/icon2.jpg'),
    },
     {
      id:3,
      img:require('../../assets/icon3.jpg'),
    },
     {
      id:4,
      img:require('../../assets/icon4.jpg'),
    },
     {
      id:5,
      img:require('../../assets/icon5.jpg'),
    },
     {
      id:6,
      img:require('../../assets/icon6.jpg'),
    },
    {
      id:7,
      img:require('../../assets/icon7.jpg'),
    },
    {
      id:8,
      img:require('../../assets/icon8.jpg'),
    },
    {
      id:9,
      img:require('../../assets/icon9.jpg'),
    }
  ]


  const items = data.map((item) => {
        return (
            <div className='slider' key={item.id}>
            <div className='carosel-img-cont rounded-md'>
               <img src={item.img}  objectFit='cover' alt=''/>
              </div>
               <h1 className='sliderHeading'>{item.title}</h1>
               <p className='cost'>{item.price}</p>
            </div>
        )
    
    })

    const responsive = {
        0:{
            items:3
        },
        512:{
            items:5
        },
        840:{
          items:7
        }
    }

  return (
    <div className='carousel-container flex flex-col items-center justify-center '>
    <p className='text-5xl text-center font-bold py-4 font-extrabold text-transparent text-10xl bg-clip-text bg-gradient-to-r from-blue-400 to-violet-800'>We accept the following insurance medical covers</p>
    <p className='pb-2 text-center px-2 text-xl'>A vision to a quality low cost treatment to every patient within the nation</p>
       <div className=' container rounded-md carousel flex items-center'>
 <AliceCarousel 
     mouseTracking
     infinite
     autoPlayInterval={1000}
     animationDuration={1500}
     disableDotsControls
     disableButtonsControls
     responsive={responsive}
     autoPlay
     items={items}
 />
 </div>
    </div>
  )
}

export default Carousel