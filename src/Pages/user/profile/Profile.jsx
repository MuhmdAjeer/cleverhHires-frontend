

import "./Profile.scss";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../../components/home/Feed";
import {RightBar} from '../../../components/home/rightbar/RightBar'
// import Rightbar from "../../components/rightbar/Rightbar";
import Navbar from "../../../components/NavBar/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="home_container profile_home ">

      <div className="profile">
        
        
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="https://wallpaperaccess.com/full/2068754.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="./avatar.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Muhammed Ajeer</h4>
              <span className="profileInfoDesc">Full Stack developer</span>
            </div>
          </div>
          <div className="profileRightBottom">
            {/* <Feed /> */}
            
          </div>
        </div>
      </div>
      <RightBar/>
      </div>
    </>
  );
}
