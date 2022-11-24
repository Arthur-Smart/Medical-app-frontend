import React from 'react'
import './achievementstories.css'

function AchievementStories() {
  return (
    <div className='stories py-2 flex flex-col items-center justify-center'>
        <p className='text-center py-2 text-2xl font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Our track record of success in our healthcare professionalism.</p>
        <p className='text-center text-lg'>Below are some of our great experiences</p>
        <div className='container flex flex-wrap gap-2 items-center justify-center'>
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/heart.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Heart surgery</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>We had one of our patient diagonised with a heart problem due to a turma that was growing in his heart. A successful surgery was performed to him thus saving his life from additional challenges or heart problems. The person is now functioning well and able to carry out his dairy work routine</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>
                </div>                
            </div>
            {/*Story */}
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/kidney.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Kidney transplant</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>After a perfect observation, testing and consultation, one of our patient had to be given a kidney by a willing donor for her to survive. After a will donor was found, the operation was successful and it was a 100% survival for both parties.</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>
                </div>                                
            </div>
            {/*End of story */}

              {/*Story */}
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/twins.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Twins separation</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>Two twins were born in our hospital but they had been attached together slightly at the elbow. It was a devastating moment to the parents but our doctors handled the situation professionally. They successfully separated the twins and they are now doing well and great</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>
                </div>                
            </div>
            {/*End of story */}

              {/*Story */}
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/fracture.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Restoration of knee dislocation</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>One of our patient had a knee dislocation which made him to move from one hospital to another without sufficient solution to his knee problem. It was one week after we had an operation on his kneel that it was located back and the man was healed and ok.</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>
                </div>                
            </div>
            {/*End of story */}

            {/*Story */}
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/birth.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Birth operation</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>Safe surgical delivery from Stella Njoki. Her life and that of her child was safe by the help of our doctor. The operation was well done and there were no side effect even after the wound healed</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>               
                </div>                
            </div>
            {/*End of story */}

              {/*Story */}
            <div className='story rounded-md py-2 flex'>
                <div className='story-left  flex items-center justify-center'>
                    <img src={require('../../assets/eye.jpg')} alt='' className='rounded-md'/>
                </div>
                <div className='story-right '>
                    <div className='flex items-center justify-between pr-2'>
                        <p className='font-bold text-stone-600 text-2xl'>Eye surgery</p>
                        <p>12th August 2022</p>
                    </div>
                        <hr></hr>
                        <p>I had my daughter vision restored by Boresha Afya doctors. My daughter had been suffering from unclear visi for a period of 3 months after she had an accident at school playing. I thank God that the process was successfull and my child is now seeing well- (Message from mother)</p>
                        <p className='text-sky-500 cursor-pointer'><i class="fa-solid fa-heart-pulse fa-2x"></i></p>               
                </div>                
            </div>
            {/*End of story */}
        </div>
    </div>
  )
}

export default AchievementStories