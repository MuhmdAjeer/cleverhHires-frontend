import { useState } from "react";

import "./Profile.scss";
import { RightBar } from '../../../components/home/rightbar/RightBar'
import Navbar from "../../../components/NavBar/Navbar";
import { Cancel, Edit } from "@mui/icons-material";
import Modal from '../../../components/modal/Modal'
import AddExperience from '../../../components/user/Experience/AddExperience'

const MODAL_STYLE = {
  position: "fixed",
  display: "flex",
  width: "40%",
  top: "50%",
  borderRadius: "10px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
  height : 'auto'
};

export default function Profile() {

  const [openEditAbout,setOpenAbout] = useState(false)
  const [openEditExperience,setOpenExperience] = useState(false)

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
                <span className="follow_meta" >5 Followers | 9 Following</span>
              </div>
            </div>
            <div className="profileRightBottom">
              {/* <Feed /> */}

            </div>
          </div>
          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>About</h3>
              <Edit onClick={()=>setOpenAbout(true)} htmlColor="grey" />
              <Modal containerStyle={MODAL_STYLE} open={openEditAbout}  >
                <div className="create_post_modal">
                  <div className="modal_top">
                    <span className="modal_header">Edit About</span>
                    <Cancel onClick={()=>setOpenAbout(false)} className="cancel_icon" />
                  </div>
                  <div className="modal_body">
                    <div className="edit_about_container">
                      <span>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</span>
                      <div>
                      <textarea required className='job_description' name="description" id="" cols="63" rows="15"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="modal_bottom">
                    <div className="modal_actions">
                      <button className="btn_done">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa illo. Vitae harum esse eligendi dolor quae, aut inventore quod nemo saepe molestiae accusantium exercitationem quas rem aliquam quos similique natus id quia perferendis aliquid voluptatibus totam ipsa fuga aperiam?</span>
          </div>
          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>Experience</h3>
              <Edit onClick={()=>setOpenExperience(true)}  htmlColor="grey" />
              <Modal containerStyle={MODAL_STYLE} open={openEditExperience}  >
                <AddExperience modalHandler={setOpenExperience} />
              </Modal>
              

            </div>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />

          </div>

          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>Skills</h3>
              <Edit htmlColor="grey" />
            </div>
            <div className="skills">

              <div className="skill">Nodejs</div>
              <div className="skill">MongoDB</div>
              <div className="skill">React</div>
            </div>

          </div>

        </div>
        <RightBar />
      </div>
    </>
  );
}

function ExperienceCard() {
  return (
    <div className="exp-card" >
      <img src="./google.png" alt="" />
      <div className="exp-meta">
        <h4>Backend Developer</h4>
        <h5>Google</h5>
        <span>Jun 2022 - Present · 6 mos</span>
        <span>Banglore,India</span>
      </div>
    </div>
  )
}
