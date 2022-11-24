import React from 'react'
import Notifications from './Notifications'
import Options from './Options'
import VideoBox from './VideoBox'
import './videochart.css'

function VideoChart() {
  return (
    <div>
        <p>Hello</p>
        <div>
            <VideoBox/>
            <Options>
                <Notifications/>
            </Options>
        </div>
    </div>
  )
}

export default VideoChart