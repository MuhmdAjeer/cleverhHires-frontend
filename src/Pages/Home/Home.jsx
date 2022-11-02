
import Feed from '../../components/feed/Feed'
import ProfileCard from '../../components/leftbar/ProfileCard'
import Navbar from '../../components/NavBar/Navbar'
import Share from '../../components/Share/Share'
import { RightBar } from '../../components/rightbar/RightBar'
import './home.scss'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home_container">
          <ProfileCard/>
          <Feed/>
          {/* <Share/> */}
          <RightBar/>
      </div>

    </>
  )
}

export default Home