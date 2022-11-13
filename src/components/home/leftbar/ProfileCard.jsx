import React, { useEffect, useState } from 'react'
import './profilecard.scss'
import { People, RssFeed, Work ,Group } from '@mui/icons-material'
import jwtDecode from 'jwt-decode'
import {  useNavigate } from 'react-router-dom'

const ProfileCard = () => {
  const [user,setUser] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
  const { token } = JSON.parse(localStorage.getItem('user'))
     const userData = jwtDecode(token)
     setUser(userData)
  },[])
 

  return (
    <div className='card_container'>
      <div className="card">
        <div className="profile">
          <img className='image' src="./avatar.jpeg" alt="" />
          <h2  >{user?.name}</h2>
        </div>
        <ul>
          <li>
            <RssFeed />
            <span>Posts</span>
          </li>
          <li onClick={()=> navigate('/jobs')} >
            <Work />
            <span>Jobs</span>
          </li>
          <li>
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
