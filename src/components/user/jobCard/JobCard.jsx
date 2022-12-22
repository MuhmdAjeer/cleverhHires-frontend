import { Work, Laptop, Money , Bookmark, AirplaneTicket, Check, CheckCircle} from '@mui/icons-material'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Modal from '../../modal/Modal'

import './JobCard.scss'
import JobApplication from '../../Jobapplication/JobApplication'


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
};

const JobCard = ({job,setJob}) => {

  const [openModal,setOpenModal] = useState(false)
  const [applied,setApplied] = useState(false)


  useEffect(()=>{
    console.log(job.applications);
    const user = JSON.parse(localStorage.getItem('user'))
    if( job && job.applications.some((application)=> application.seeker === user?.user?._id)){
      setApplied(true)
    }
  },[job])

  return (
    <>
      <div  tabIndex={1} onClick={()=>setJob(job)} className='job_card'>
        <div className="card_container">
          <div className="left">

            <div className="top_left">
              <img className='img' src="../building.png" alt="" />
              <div className="top_left_details">
                <span className='job_role' >{job.jobRole}</span>
                <span className='company_name' >{job.hirer.company}</span>
                <span className='location' >{job.location}</span>
              </div>
            </div>

            <div className="center_left">
              <div className="employment_card">
                <Work fontSize='5px' />
                <span>{job.employmentType}</span>
              </div>
              <div className="employment_card">
                <Laptop fontSize='5px' />
                <span>{job.workplace}</span>
              </div>
              <div className="employment_card">
                <Money fontSize='5px' />
                <span>${job.minSalary} - ${job.maxSalary} a year</span>
              </div>
              <span className='job_time' >{moment(job.createdAt).fromNow()}</span>
            </div>
          </div>
          <div className="right">
            {
              applied ? 
              <>
              <CheckCircle color='primary' textAnchor='Already Applied' />
              <span style={{marginRight:'5px'}} >Applied</span>
              </>
            // <button onClick={()=>setOpenModal(!openModal)} >UnApply</button>
              :
              <button onClick={()=>setOpenModal(!openModal)} >Apply</button>

            }
      <Modal open={openModal}  containerStyle={MODAL_STYLE} >
        <JobApplication closeModal={()=> setOpenModal(false)} job={job} />
      </Modal>
            <div>
              <Bookmark/>
            </div>
          </div>
        </div>
        
      </div>

    </>
  )
}

export default JobCard