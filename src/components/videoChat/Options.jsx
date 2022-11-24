import React, {useContext, useState} from 'react'
import {CopyToClipboard}  from 'react-copy-to-clipboard'
import { ContextProvider, SocketContext } from '../SocketContext'

function Options({children}) {
    const {me, acceptedCall, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
    const [idToCall, setIdToCall] = useState() 
    
  return (
    <div>
        <div>
            <input type="text" style={{borderColor:"black", borderWidth:3}}/>
        <CopyToClipboard text={me}>
       
            <button>Copy id</button>
        </CopyToClipboard>
        </div>
        <div>
            <input type="text" style={{borderColor:"black", borderWidth:3}}/>
        { acceptedCall && !callEnded ? (
            <button onClick={leaveCall}>Hung up</button>
        ) : (
            <button onClick={() => callUser(idToCall)}>Call</button>
        )}
        </div>
        {children}
    </div>
  )
}

export default Options