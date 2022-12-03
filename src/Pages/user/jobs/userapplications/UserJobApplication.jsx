import { AccessAlarmSharp, Cancel, Chat, Remove, RemoveCircle, RemoveRedEye, ViewAgenda } from '@mui/icons-material'

import './userApplications.scss'
import ProfileCard from "../../../../components/home/leftbar/ProfileCard"
import { RightBar } from "../../../../components/home/rightbar/RightBar"
import Navbar from "../../../../components/NavBar/Navbar"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getJob } from '../../../../redux/actions/jobs'
import { useSelector } from 'react-redux'
import Modal from '../../../../components/modal/Modal'
import { useState } from 'react'

const MODAL_STYLE = {
  position: "fixed",
  display: "flex",
  width: "40%",
  // height:'auto',
  top: "50%",
  borderRadius: "10px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
};



const UserJobApplication = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { job } = useSelector((state) => state.jobs)
  const [openModal,setOpenModal] = useState(false)
  const [application,setApplication] = useState({})
  const navigate = useNavigate()
  // const jobs = useSelector((state)=>state.jobs.myJobs)

  const handleViewApplication = (application)=>{
    setApplication(application)
    setOpenModal(true)
  }


  useEffect(() => {
    dispatch(getJob(id))
    console.log(job);
  }, [])

  return (
    <>
      <Navbar />
      <div className="home_container">
        <ProfileCard />
        <div className="posted_jobs">
          <div className="posted_jobs_wrapper ">
            <div className="applicants">
              <span>Applicants</span>
              <hr />

              {
                job.applications ?
                  job.applications.map((application) => (
                    <div className="applicants_card">
                      <div className='myc_left' >
                        <div>
                          <img style={{ borderRadius: '50%' }} src="../avatarIcon.jpg" alt="" />
                        </div>
                        <div>
                          <h3>{application.seeker.username}</h3>
                          <span>{application.seeker.email}</span>

                        </div>
                      </div>
                      <div className='myc_right' >

                        <RemoveRedEye onClick={()=>handleViewApplication(application)} sx={{ mr: '5px' }} htmlColor='#0a66c2' />
                        <Chat htmlColor='#0a66c2' />
                      </div>
                    </div>

                  ))
                  :
                  null
              }






            </div>
            <Modal open={openModal} containerStyle={MODAL_STYLE} >
                        <div className="create_post_modal">
                          <div className="modal_top">
                            <span className="modal_header">Application Details</span>
                            <Cancel onClick={()=>setOpenModal(false)} className="cancel_icon" />
                          </div>
                          <div className="modal_body">
                            <div style={{ width: '100%' }} className="application_details">
                              <div onClick={()=>navigate(`/profile/${application?.seeker?.username}`)} className="applicant_meta">
                                <img src={application?.seeker?.profileImage || '../avatarIcon.jpg'} alt="" />
                                <div>
                                  <h4>{application?.seeker?.firstName + " " + application?.seeker?.lastName}</h4>
                                  <span>{application?.seeker?.email}</span>
                                </div>
                              </div>
                              <div className="application_meta">
                                <h4>Joining Time</h4>
                                <span>Within {application?.joiningTime} days</span>

                                <h4>Expected CTC</h4>
                                <span>{application.ctc} LPA</span>

                                <h4>Resume</h4>
                                <div className="view_resume_btn">
                                  <div
                                    className="pdf_red">
                                    PDF
                                  </div>
                                  <div className="resume_name">
                                    <span>View</span>
                                    <RemoveRedEye className="cancel_icon" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal_bottom">
                            <div className="modal_actions">
                            
                              <button onClick={()=>setOpenModal(false)} className="btn_done">
                                Done
                              </button>
                            </div>
                          </div>
                        </div>
                      </Modal>
          </div>
        </div>
        <RightBar />
      </div>

    </>
  )
}

export default UserJobApplication