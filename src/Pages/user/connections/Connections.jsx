import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../../../components/home/leftbar/ProfileCard'
import Navbar from '../../../components/NavBar/Navbar'
import UserCard from '../../../components/usercard/UserCard'
import { getAllUsers } from '../../../redux/actions/users'

import './Connection.scss'

const Connections = () => {
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.user.users)
  const refresh = useSelector((state)=> state.posts.refresh)

  useEffect(()=>{
    dispatch(getAllUsers())
  },[refresh])

  return (
    <>
    <Navbar />
    <div className="home_container">
        <ProfileCard/>
          {/* <span>People you may know</span> */}
        <div className="peoples">
          {
            users && users.map((user)=> (
              <UserCard key={user._id} user={user} />
            ))
          }
        </div>
    </div>
  </>
  )
}

export default Connections