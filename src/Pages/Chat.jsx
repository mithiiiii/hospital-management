import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"
import { Button } from '@mantine/core';


export default function Chat() {
    const [message,setMessage]= useState()
    const [room,setRoom]=useState()
    const [messages,setMessages]=useState([])
    const [isJoined,setIsJoined]=useState(false)
    const socket = io("https://hospitalmanagement-msai.onrender.com",{transports:["websocket"]})


    useEffect(()=>{
      socket.on("joined",()=>{
          setIsJoined(true)
      })
      socket.on("message",(msg)=>{
        setMessages((prev)=>[...prev,msg])
      })
    },[room])
    function send(){
        socket.emit("message",message,room)
    }
    function join(){
      socket.emit("join",room)

    }
    


  return (
   
    <div>
{

     !isJoined ? <div>
           <input onChange={(e)=>setRoom(e.target.value)} placeholder='Enter Room Id'/>
           <button onClick={join}>Join</button>
      </div>
      :

    
    <div className='bg-green-900'>
        {
          messages.map((mess,index)=>{
            return(
            <p key={index}>
              {mess}
              </p>)
          })
        }
            

            
          
        
        <input onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='enter message'/>
        <button onClick={send}>send</button>
        <Button variant="filled">Button</Button>;


    </div>
      
}
       </div>
  )
}
