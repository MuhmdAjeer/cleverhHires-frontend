import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../redux/actions/users'
import './usercard.scss'

const UserCard = ({user}) => {
    const [following,setFollowing] = useState(false)
    const dispatch = useDispatch()


   useEffect(()=>{
    const User = JSON.parse(localStorage.getItem('user'))
    console.log(User.user._id);
    if(user?.followers?.includes(User.user._id)){
        setFollowing(true)
    }else{
        setFollowing(false)
    }
   },[user]) 

   const handleFollow = () => {
    dispatch(followUser(user._id))
   }
   const handleUnfollow = () => {
    dispatch(unfollowUser(user._id))
   }

  return (
    <>
    <div className="user_card">
        <div className="user_card_container">
            <img className='user_card_img' src={`${user?.profileImage ? user?.profileImage : '../avatarIcon.jpg'}`} alt="" />
            <h3>{user.lastName}</h3>
            <span>Flutter Developer</span>
            {
                following ?  <button onClick={handleUnfollow} className='connect_btn' >Unfollow</button>
                : 
                <button onClick={handleFollow} className='connect_btn' >Follow</button>
            }
        </div>
    </div>
    </>
    )
}

export default UserCard