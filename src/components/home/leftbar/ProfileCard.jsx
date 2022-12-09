import React, { useEffect, useState } from 'react'
import './profilecard.scss'
import { People, RssFeed, Work ,Group } from '@mui/icons-material'
import jwtDecode from 'jwt-decode'
import {  useNavigate } from 'react-router-dom'
import * as API from '../../../api/index'

const ProfileCard = () => {
  const [user,setUser] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
  // const User = JSON.parse(localStorage.getItem('user'))
  //   //  const userData = jwtDecode(token)
    //  setUser(User.user)
    //  console.log(user,'///');

     const { user : User } = JSON.parse(localStorage.getItem('user'))
     API.getProfile(User?.username).then(({ data }) => {
       setUser(data)
     })
  },[])
 

  return (
    <div className='profile_card_container'>
      <div className="card">
        <div className="profile">
          <img onClick={()=>navigate(`/profile/${user.username}`)} className='image' src={`${user?.profileImage ? user?.profileImage : '../avatarIcon.jpg'}`} alt="" />
          <h2  >{user?.username}</h2>
        </div>
        <ul>
          <li onClick={()=> navigate('/')} >
            <RssFeed />
            <span>Posts</span>
          </li>
          <li onClick={()=> navigate('/jobs')} >
            <Work />
            <span>Jobs</span>
          </li>
          <li onClick={()=> navigate('/connections')} >
            <People/>
            <span>Connections</span>
          </li>
          <li>
            <Group />
            <span>Followers</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default ProfileCard
