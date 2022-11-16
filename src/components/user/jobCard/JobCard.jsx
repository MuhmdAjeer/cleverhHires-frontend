import { Work, Laptop, Money , Bookmark} from '@mui/icons-material'
import moment from 'moment'

import './JobCard.scss'

const JobCard = ({job,setJob}) => {
  return (
    <>
      <div  tabIndex={1} onClick={()=>setJob(job)} className='job_card'>
        <div className="card_container">
          <div className="left">

            <div className="top_left">
              <img src="../google.png" alt="" />
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
            <button>Apply</button>
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