/* eslint-disable react-hooks/rules-of-hooks */
import React, {createContext, useState, useRef, useEffect} from 'react'
import {io} from 'socket.io-client';
import Peer from 'simple-peer'

const SocketContext = createContext();
const socket = io('http://localhost:5000')

const ContextProvider = ({children}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [stream, setStream] = useState(null)
    const [me, setMe] = useState('')
    const [call, setCall] =useState({})
    const [acceptedCall, setAcceptedCall] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')

    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()
    
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: true}).then((currentStream) => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream
        });

        socket.on("me", (id) => setMe(id));
        socket.on("calluser", ({from, name:callerName, signal}) => {
            setCall({isReceivedCall:true, from, name:callerName, signal})
        });
    },[])

    const answerCall = () => {
        setAcceptedCall(true)
        const peer = new Peer({initiator:false, trickle:false, stream})

        peer.on('signal', (data) => {
            socket.emit('answercall', {signal: data, to: call.from})
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal)

        connectionRef.current = peer;
    }

    const callUser = (id) => {
        const peer = new Peer({initiator:true, trickle:false, stream})

         peer.on('signal', (data) => {
            socket.emit('calluser', {userToCall: id, signalData: data, from: me, name})
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('callaccepted', (signal) => {
            setAcceptedCall(true)
            peer.signal(signal)
        });

        connectionRef.current = peer;
    }

    const leaveCall = () =>{
        setCallEnded(true)
        connectionRef.current.destroy()
        window.location.reload()
    }

    return(
        <SocketContext.Provider value={{
            call, acceptedCall, myVideo,  userVideo, stream, name, setName, callEnded, me, callUser,leaveCall, answerCall
        }}>
            {children}
        </SocketContext.Provider>
    )
}

export {ContextProvider, SocketContext}