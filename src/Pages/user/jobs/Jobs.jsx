import { Fragment } from "react"
import Navbar from "../../../components/NavBar/Navbar"
import JobCard from "../../../components/user/jobCard/JobCard"
import './Jobs.scss'


const Jobs = () => {
  return (
   <Fragment>
    <Navbar/>
    <div className="jobs_container">
        <div className="jobs">
            <JobCard/>
            <JobCard/>
            <JobCard/>
            <JobCard/>
        </div>
        <div className="job_details">
          <div className="jd_container">
            <div className="jd_top">

            <div className="jd_top_left">
              <h1>Backend Developer</h1>
              <h3>Google.Inc</h3>
              <h4>Bengaluru,Karnataka</h4>
            </div>
            <div className="jd_top_right">

              <img src="../google.png" alt="" />
            </div>
            </div>

          <hr />
            <div className="jd_mid">
              <h4>Job details</h4>

              <div className="jd_details">
                <span>Salary</span>
                <span>$300000 - $600000 a year</span>
              </div>


              <div className="jd_details">
                <span>Job type</span>
                <span>Full Time</span>
              </div>

              <div className="jd_details">
                <span>Workplace type</span>
                <span>On-site</span>
              </div>
              <hr />
              <h4>Required Skills</h4>
              <div className="skills">

              <div className="skill">Nodejs</div>
              <div className="skill">Reactjs</div>
              <div className="skill">Mongodb</div>
              </div>
              <hr />
              <h4>Job Description</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae dolorem, illum iusto eum commodi blanditiis alias eveniet porro, placeat accusantium doloribus reprehenderit iure nisi exercitationem! Officia ullam, nobis in repellat quis dolore reprehenderit modi nesciunt commodi eaque quo aspernatur facere, ratione quia et vel quasi iusto reiciendis! Iusto, facilis ad veritatis perferendis molestias quisquam accusamus sunt sapiente voluptates. Architecto aspernatur odit a laboriosam at quis doloremque itaque enim, quam delectus harum reiciendis sapiente modi, autem ipsa necessitatibus beatae consequatur voluptate suscipit? Id sint at facilis ullam, eligendi vel iure autem iste nihil in consequuntur unde quo minus fugiat. Ipsam, maxime.</p>
            </div>
          </div>
        </div>
    </div>
   </Fragment>
  )
}

export default Jobs