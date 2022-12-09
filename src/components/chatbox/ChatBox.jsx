import moment from 'moment';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { getUser } from '../../api';
import { addMessage, getChatMessages } from '../../api/message';
import InputEmoji from 'react-input-emoji'
import './chatbox.css'

export const ChatBox = ({ chat, currentUser , setSendMessage , receiveMessage }) => {
    const [userData, setUserData] = useState(null);
    const [messages,setMessages] = useState()
    const [newMessage,setNewMessage] = useState('')
    const scroll = useRef()



    useEffect(()=>{
        const fetchMessages = async()=>{
            try {
                const {data} = await getChatMessages(chat._id);
                setMessages(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }

        if(chat !== null) fetchMessages();
    },[chat])

    useEffect(()=>{
        scroll?.current?.scrollIntoView({behavior:'smooth'})
    },[messages])

    useEffect(()=>{
        if(receiveMessage !== null && receiveMessage.chatId === chat._id){
            setMessages([...messages,receiveMessage])
        }
    },[receiveMessage])

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userId = chat?.members?.find((id) => id !== currentUser)
                const response = await getUser(userId);
                console.log(response.data);
                setUserData(response.data)

            } catch (error) {
                console.log(error);
            }
        }
        getUserData()

    }, [chat, currentUser])

    const handleChange = (newMessage)=>{
        setNewMessage(newMessage)
    }

    const handleSend = async(event)=>{
        event.preventDefault();
        const message ={
            senderId : currentUser,
            text : newMessage,
            chatId : chat._id
        }

        try {
            const {data} = await addMessage(message);
            setMessages([...messages,data])
        } catch (error) {
            console.log(error);
        }

        const receiverId = chat.members.find((id)=> id !== currentUser)
        setSendMessage({...message,receiverId})
    }


    return (
        <>
            <div className="ChatBox-container">
                <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>

                                <img src={userData?.profileImage ? userData?.profileImage : './avatarIcon.jpg'}
                                    className='followerImage' alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                <div className="name" style={{ fontSize: '0.8rem' }} >
                                    <span>{userData?.username}</span>
                                    <span>Online</span>
                                </div>
                            </div>
                        </div>
                        <hr  style={{width:'85%',border:'0.1px solid #ececec'}} />
                    </div>

                    <div className="chat-body">
                        {messages?.map((message)=>(
                            <>
                            <div ref={scroll} className={message.senderId === currentUser ? "message own" : "message"}>
                            <span>{message.text}</span>
                            <span>{moment(message.createdAt).fromNow()}</span>
                            </div>
                            </>
                        ))}
                    </div>


                    <div className="chat-sender">
                        <div>+</div>
                        <InputEmoji 
                        setValue={newMessage}
                        onChange={handleChange}  
                        />
                        <div onClick={handleSend} className="send-button button">
                            Send
                        </div>
                    </div>
                </>
            </div>
        </>
    )
}
