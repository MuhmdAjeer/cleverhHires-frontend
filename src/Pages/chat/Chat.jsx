import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { userChats } from '../../api/chats'
import Conversation from '../../components/conversation/Conversation'
import {io} from 'socket.io-client'
import {useSelector} from 'react-redux'
import './Chat.scss'
import { ChatBox } from '../../components/chatbox/ChatBox'
import Navbar from '../../components/NavBar/Navbar'
import Loader from '../../components/Loader'

export const Chat = () => {

  const [chats,setChats] = useState([])
  const [currentChat,setCurrentChat] = useState(null)
  const [onlineUsers,setOnlineUsers] = useState([])
  const [sendMessage,setSendMessage] = useState(null); 
  const [receiveMessage,setReceiveMessage] = useState(null)
  const {user} = JSON.parse(localStorage.getItem("user"));
  const socket = useRef()
  const [loading,setLoading] = useState(false)



  useEffect(()=>{
    socket.current = io('https://emarald.online/')
    socket.current.emit('new-user-add',user._id)
    socket.current.on('get-users',(users)=>{
      setOnlineUsers(users)
    })
  },[])

  const checkOnlineStatus = (chat)=>{
    const chatMember = chat.members.find((member)=> member !== user._id)
    const online = onlineUsers.find((uuser)=> uuser.userId === chatMember)
    return online ? true : false
  }

  useEffect(()=>{
    socket.current.on('receive-message',(data)=>{
      setReceiveMessage(data)
    })
  },[])

  useEffect(()=>{
    if(sendMessage !== null){
      socket.current.emit('send-message',sendMessage)
    }
  },[sendMessage])


  useEffect(()=>{
    getChats()
    console.log(user,'ddd');
  },[])

  const getChats = async()=>{
    setLoading(true)
    try {
      const {data} = await userChats();
      setChats(data)
      setCurrentChat(data[0])
      setLoading(false)
      console.log(data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  if(loading){
    return <Loader/>
  }

  return (
    <>
    <Navbar/>
    <div className='Chat' >

      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {
              chats.map((chat)=>(
                <>
                <div  onClick={()=>setCurrentChat(chat)}>
                <Conversation online={checkOnlineStatus(chat)} data={chat} currentUserId={user._id} />
                </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
           <ChatBox receiveMessage={receiveMessage} setSendMessage={setSendMessage} chat={currentChat} currentUser={user._id}/>
      </div>
    </div>

            </>
  )
}
