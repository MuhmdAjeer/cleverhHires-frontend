import { useCallback, useEffect, useState } from "react";

import "./Profile.scss";
import { RightBar } from '../../../components/home/rightbar/RightBar'
import Navbar from "../../../components/NavBar/Navbar";
import { Add, Cancel, Edit, PlusOne } from "@mui/icons-material";
import Modal from '../../../components/modal/Modal'
import AddExperience from '../../../components/user/Experience/AddExperience'
import { useDispatch, useSelector } from "react-redux";
import { editAbout, getProfile } from "../../../redux/actions/users";
import { useParams, useNavigate } from 'react-router-dom';
import moment from "moment";
import Loader from "../../../components/Loader";

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
  height: 'auto'
};

export default function Profile() {

  const [openEditAbout, setOpenAbout] = useState(false)
  const [openEditExperience, setOpenExperience] = useState(false)
  const [updatePicModal, setUpdatePicModal] = useState(false)
  const [ownProfile, setOwnProfile] = useState(false)
  const profile = useSelector((state) => state.user.profile)
  const navigate = useNavigate()
  const [about, setAbout] = useState(profile?.about)
  const { username } = useParams()
  const [loading, setLoading] = useState(true)



  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile(username, navigate, setLoading))
    const user = JSON.parse(localStorage.getItem('user'))

    if (profile?._id === user?.user?._id) {
      setOwnProfile(true)
    }
    console.log(profile);
  }, [])

  const handleAboutEdit = () => {
    console.log(about);
    dispatch(editAbout(about))
  }

  const handleProPicUpdate = ()=>{

  }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <Navbar />
      <div className="home_container profile_page_container">

        <Modal
          containerStyle={MODAL_STYLE}
          open={updatePicModal}
          onClose={() => setUpdatePicModal(false)}
        >
          <div className="create_post_modal">
            <div className="modal_top">
              <span className="modal_header">Update Profile Image</span>
              <Cancel className="cancel_icon" />
            </div>
            <div className="modal_body">
              <div className="imageContainer">
                <img src="../avatar.jpeg" className="new_post_img" alt="" />
              </div>
            </div>
            <div className="modal_bottom">
              <div className="modal_actions">
                <button onClick={() => setUpdatePicModal(false)} className="btn_cancel" o>
                  Cancel
                </button>
                <button onClick={handleProPicUpdate} className="btn_done">
                  Done
                </button>
              </div>
            </div>
          </div>
        </Modal>

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
                onClick={()=>setUpdatePicModal(true)}
                  className="profileUserImg"
                  src={profile?.profileImage ? profile?.profileImage : '../avatarIcon.jpg'}
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{`${profile?.firstName} ${profile?.lastName}`}</h4>
                <span className="profileInfoDesc">Full Stack developer</span>
                <span className="follow_meta" >{profile?.followers?.length} Followers | {profile?.following?.length} Following</span>
              </div>
            </div>
            <div className="profileRightBottom">
              {/* <Feed /> */}

            </div>
          </div>
          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>About</h3>
              {
                ownProfile ?
                  <Edit onClick={() => setOpenAbout(true)} htmlColor="grey" />
                  :
                  null
              }
              <Modal containerStyle={MODAL_STYLE} open={openEditAbout}  >
                <div className="create_post_modal">
                  <div className="modal_top">
                    <span className="modal_header">Edit About</span>
                    <Cancel onClick={() => setOpenAbout(false)} className="cancel_icon" />
                  </div>
                  <div className="modal_body">
                    <div className="edit_about_container">
                      <span>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.</span>
                      <div>
                        <textarea required value={about} onChange={(e) => setAbout(e.target.value)} className='job_description' name="description" id="" cols="63" rows="15" />
                      </div>
                    </div>
                  </div>
                  <div className="modal_bottom">
                    <div className="modal_actions">
                      <button onClick={handleAboutEdit} className="btn_done">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
            <span>{profile?.about}</span>
          </div>
          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>Experience</h3>
              {
                ownProfile ?
                  <Add onClick={() => setOpenExperience(true)} htmlColor="grey" />
                  :
                  null
              }
              <Modal containerStyle={MODAL_STYLE} open={openEditExperience}  >
                <AddExperience modalHandler={setOpenExperience} />
              </Modal>


            </div>
            {
              profile && profile.experiences.map((experience) => (
                <ExperienceCard experience={experience} />
              ))
            }
            {/* <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard /> */}

          </div>

          <div className="profile_meta_card">
            <div className="pro_meta_top">
              <h3>Skills</h3>
              {
                ownProfile ?
                  <Edit htmlColor="grey" />
                  :
                  null
              }
            </div>
            <div className="skills">

              <div className="skill">Nodejs</div>
              <div className="skill">MongoDB</div>
              <div className="skill">{username}</div>
            </div>

          </div>

        </div>
        <RightBar />
      </div>
    </>
  );
}

function ExperienceCard({ experience }) {
  return (
    <div className="exp-card" >
      <img src="../google.png" alt="" />
      <div className="exp-meta">
        <h4>{experience.title}</h4>
        <h5>{experience.companyName}</h5>
        {experience.currentRole ?
          <span> {`${experience.startMonth} ${experience.startYear}`} - Present · {moment(`${experience.startYear} ${experience.startMonth}`).fromNow(true)}</span>
          :
          <span> {`${experience.startMonth} ${experience.startYear}`} - {`${experience.endMonth} ${experience.endYear}`} · {moment(`${experience.startYear} ${experience.startMonth}`).from(`${experience.endYear} ${experience.endMonth}`, true)}</span>
        }
        <span>{experience.location}</span>
      </div>
    </div>
  )
}
