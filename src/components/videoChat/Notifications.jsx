import React, {useContext} from 'react'
import { SocketContext } from '../SocketContext';

function Notifications() {
    const {answerCall, call, acceptedCall} =  useContext(SocketContext);
  return (
    <div>
        {call.isReceivedCall && !acceptedCall && (
            <div>
            <h1>{call.name} is calling</h1>
            <button>Answer call</button>
            </div>
        )}
    </div>
  )
}

export default Notifications