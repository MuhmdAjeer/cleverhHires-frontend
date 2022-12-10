import React from 'react'
import { useState, useEffect } from 'react'
import { getUser } from '../../api';

const Conversation = ({ data, currentUserId , online }) => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData()
  }, [])

  const getUserData = async () => {
    try {
      const userId = data.members.find((id) => id !== currentUserId)
      const response = await getUser(userId);
      setUserData(response.data)

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
    <div className="follower conversation">
      <div>
        {online && <div className="online-dot"></div>}
        <img src={userData?.profileImage ? userData?.profileImage : './avatarIcon.jpg'}
          className='followerImage' alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
        <div className="name" style={{ fontSize: '0.8rem' }} >
          <span>{userData?.username}</span>
          <span>Online</span>
        </div>
      </div>
    </div>
          </>
  )
}

export default Conversation