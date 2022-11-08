
import Feed from '../../components/home/Feed'
import ProfileCard from '../../components/home/leftbar/ProfileCard'
import Navbar from '../../components/NavBar/Navbar'
import { RightBar } from '../../components/home/rightbar/RightBar'
import './home.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
          <ProfileCard/>
          <Feed/>
          <RightBar/>
      </div>

    </>
  )
}

export default Home