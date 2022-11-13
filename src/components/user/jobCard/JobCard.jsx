import { Work, Laptop, Money , Bookmark} from '@mui/icons-material'

import './JobCard.scss'

const JobCard = () => {
  return (
    <>
      <div className='job_card'>
        <div className="card_container">
          <div className="left">

            <div className="top_left">
              <img src="../google.png" alt="" />
              <div className="top_left_details">
                <span className='job_role' >Backend Developer</span>
                <span className='company_name' >Google.inc</span>
                <span className='location' >Bengaluru,Karnataka</span>
              </div>
            </div>

            <div className="center_left">
              <div className="employment_card">
                <Work fontSize='5px' />
                <span>Full-Time</span>
              </div>
              <div className="employment_card">
                <Laptop fontSize='5px' />
                <span>On-site</span>
              </div>
              <div className="employment_card">
                <Money fontSize='5px' />
                <span>$300000 - $600000 a year</span>
              </div>
              <span className='job_time' >Posted 5 days ago</span>
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