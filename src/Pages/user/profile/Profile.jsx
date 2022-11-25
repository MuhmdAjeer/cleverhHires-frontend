import Navbar from '../../../components/NavBar/Navbar'
import './Profile.scss'


const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="profile_container">
        <div className="wallpaper"></div>
        <div className="profile_image">
            <img src="avatar.jpeg" alt="" />
        </div>
        <div className="profile_meta">
        <span>Muhammed Ajeer</span>
        </div>
    </div>
    </>
  )
}

export default Profile