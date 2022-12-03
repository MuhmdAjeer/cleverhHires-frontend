
import './PostedJobs.scss'
import ProfileCard from "../../../../components/home/leftbar/ProfileCard"
import { RightBar } from "../../../../components/home/rightbar/RightBar"
import Navbar from "../../../../components/NavBar/Navbar"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserJobs } from '../../../../redux/actions/jobs'
import { useNavigate } from 'react-router-dom'
import { Badge } from '@mui/material'


const PostedJobs = () => {
    const jobs = useSelector((state)=>state.jobs.myJobs)
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserJobs())
    },[])

    return (
        <>
            <Navbar />
            <div className="home_container">
                <ProfileCard />
                <div className="posted_jobs">
                    <div className="posted_jobs_wrapper ">
                        <div className="my_jobs">
                            <span>Posted Jobs</span>
                            <hr />
                            {
                                jobs ? 
                                jobs.map((job)=>(
                                    <div onClick={()=>navigate(`${job._id}`)} className="my_jobs_card">
                                    <div>
                                        <img src="../google.png" alt="" />
                                    </div>
                                    <div>
                                    <h3>{job.jobRole}</h3>
                                    <span>{job.workplace}</span>
                                
                                    </div>
                                </div>
                                ))
                                :
                                null
                            }
                            
                        </div>
                        {/* {posts[0] && posts.map((post) => <Post key={post._id} post={post} />)} */}
                    </div>
                </div>
                <RightBar />
            </div>
        </>
    )
}

export default PostedJobs