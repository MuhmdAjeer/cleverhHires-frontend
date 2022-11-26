import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'


import Navbar from "../../../components/NavBar/Navbar"
import JobCard from "../../../components/user/jobCard/JobCard"
import Loader from '../../../components/Loader'
import { getJobs } from "../../../redux/actions/jobs"
import './Jobs.scss'

import JobCardSkeleton from "../../../skeletons/JobCardSkeleton"
import JobDetilsSkeleton from "../../../skeletons/JobDetilsSkeleton"





const Jobs = () => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  // const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState({})

  const refresh = useSelector((state) => state.posts.refresh)
  const jobs = useSelector((state) => state.jobs.jobs)





  useEffect(() => {
    dispatch(getJobs(setLoading, setSelectedJob))
    console.log('/////running useeffect');
    console.log({ jobs });
    console.log(selectedJob);
  }, [refresh])




  if (loading) {

    return (
      <>
        <Navbar />
        <div className="jobs_container">
          <div className="jobs_skeleton">
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </div>
          <div className="job_details_skeleton">
            <JobDetilsSkeleton />
          </div>
        </div>
      </>
    )
  }


  return (

    <Fragment>
      <Navbar />
      <div className="jobs_container">
        <div className="jobs">
          {
            jobs.map((job) => (
              <JobCard setJob={setSelectedJob} job={job} />
            ))
          }
        </div>
        <div className="job_details">
          <div className="jd_container">
            <div className="jd_top">

              <div className="jd_top_left">
                <h1>{selectedJob?.jobRole}</h1>
                <h3>Google.Inc</h3>
                <h4>{selectedJob?.location}</h4>
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
                <span>${selectedJob?.minSalary} - ${selectedJob?.maxSalary} a year</span>
              </div>


              <div className="jd_details">
                <span>Job type</span>
                <span>{selectedJob?.employmentType}</span>
              </div>

              <div className="jd_details">
                <span>Workplace type</span>
                <span>{selectedJob?.workplace}</span>
              </div>
              <hr />
              <h4>Required Skills</h4>
              <div className="skills">
                {
                  selectedJob?.skills?.map((skill) => (
                    <div className="skill">{skill}</div>
                    ))
                }
              </div>
              <hr />
              <h4>Job Description</h4>
              <p>{selectedJob?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}


export default Jobs