import React, {useContext} from 'react'
import { SocketContext } from '../SocketContext'

function VideoBox() {
    const {name, acceptedCall, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  return (
    <div className='flex'>
    {stream && (
        <div style={{width:400, height:400, borderWidth:2, borderColor:"black"}}>
            <p>{name || 'Name'}</p>
            <video playsInline muted ref={myVideo} style={{width:400, height:400, borderWidth:2, borderColor:"black"}}/>          
        </div>
    )}       

    {acceptedCall && !callEnded && (
        <div style={{width:400, height:400, borderWidth:2, borderColor:"black"}}>
            <p>{call.name || 'Name'}</p>
            <video playsInline ref={userVideo} />
        </div>
    )} 
        
    </div>
  )
}

export default VideoBox