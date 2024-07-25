import React from 'react'
import { Avatar } from '@mui/material'
import './Chat.css'
function Chat({name, message, profile, time}) {
  return (
    <div className='chat'>
        <Avatar alt={name} src={profile} className='chatImage'/>
        <div className='chatDetails'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chatTime'>{time}</p>
    </div>
  )
}

export default Chat
