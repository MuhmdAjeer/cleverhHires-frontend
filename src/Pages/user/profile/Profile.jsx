

import "./Profile.scss";
// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../../components/home/Feed";
import { RightBar } from '../../../components/home/rightbar/RightBar'
// import Rightbar from "../../components/rightbar/Rightbar";
import Navbar from "../../../components/NavBar/Navbar";
import { Edit } from "@mui/icons-material";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="home_container profile_page_container">


        <div className="profile_page">


          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="https://images.ctfassets.net/7thvzrs93dvf/wpImage18643/2f45c72db7876d2f40623a8b09a88b17/linkedin-default-background-cover-photo-1.png?w=790&h=196&q=90&fm=png"
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
          <div className="profile_about">
            <div className="pro_about_top">
            <h3>About</h3>
            <Edit htmlColor="grey" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa illo. Vitae harum esse eligendi dolor quae, aut inventore quod nemo saepe molestiae accusantium exercitationem quas rem aliquam quos similique natus id quia perferendis aliquid voluptatibus totam ipsa fuga aperiam?</p>
          </div>
          <div className="profile_education">
            <div className="pro_edu_top">
            <h3>About</h3>
            <Edit htmlColor="grey" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa illo. Vitae harum esse eligendi dolor quae, aut inventore quod nemo saepe molestiae accusantium exercitationem quas rem aliquam quos similique natus id quia perferendis aliquid voluptatibus totam ipsa fuga aperiam?</p>
          </div>
        </div>
        <RightBar />
      </div>
    </>
  );
}
