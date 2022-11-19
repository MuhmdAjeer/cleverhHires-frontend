import { Cancel } from '@mui/icons-material'
import ProgressBar from '@ramonak/react-progress-bar'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Swal from '@sweetalert/with-react'
import * as yup from 'yup'
import {useFormik} from 'formik'

import './jobApplication.scss'
import ResumeViewer from '../Resume/ResumeViewer'

const step1values = {
  email : '',
  phone : '',
  


}

const JobApplication = ({ job }) => {

  const [step, setStep] = useState(0)
  const [resume, setResume] = useState('')
  const [viewResume, setResumeView] = useState('')

  const handleResume = (event) => {
    setResume(event.target.files[0])
    const reader = new FileReader()
    console.log(resume);
    reader.onloadend = () => {
      setResumeView(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  const RemoveResume = () => {
    setResume('')
    setResumeView('')
  }

  const handleViewResume = (event) => {
    event.preventDefault()
    Swal(<ResumeViewer resume={viewResume} />)
  }

  const ApplicationForm = ({ step }) => {
    switch (step) {
      case 0:
        return (
          <>
            <h5>Contact Info</h5>
            <form className="application_form">
              {/* <TextField fullWidth size='small' label='Email' color='primary' /> */}
              <div>
                <TextField size='small' sx={{width:"250px"}} label='Email' color='primary' />
                <TextField size='small' sx={{width:"250px"}} label='Email' color='primary' />
              </div>
            </form>
          </>
        )
      case 1:
        return (
          <>
            <h5>Add Resume</h5>
            <p>Be sure to include an updated resume</p>
            <form className="application_form">
              {
                !resume
                  ?
                  (
                    <>
                      <input
                        type="file"
                        id="image_input"
                        accept='application/pdf'
                        onChange={handleResume}
                      />
                      <label className="img_label" htmlFor="image_input">
                        Upload Resume
                      </label>
                    </>

                  )
                  :
                  <div className="view_resume_btn">
                    <div onClick={handleViewResume}
                      className="pdf_red">
                      PDF
                    </div>
                    <div className="resume_name">
                      <span>{resume.name}</span>
                      <Cancel onClick={RemoveResume} className="cancel_icon" />
                    </div>
                  </div>

              }

            </form>
          </>
        )

      case 2:
        return (
          <>
            <h5>Contact Info</h5>
            <form className="Work Authorization">
              {/* <TextField fullWidth size='small' label='Email' color='primary' /> */}
              <h6 className='question' >In how much days you can Join</h6>
              {/* <div> */}
              <TextField size='small' label='Email' color='primary' />
              <h6 className='question' >whats the preffered CTC</h6>
              <TextField size='small' label='Email' color='primary' />
              {/* </div> */}
            </form>
          </>
        )

      default:
        break;
    }
  }

  return (
    <div style={{ width: "100%" }} >

      <div className="modal_top">
        <span className="modal_header">Apply to Google</span>
        <Cancel className="cancel_icon" />
      </div>
      <div className="appliction_center"  >
        <ProgressBar animateOnRender isLabelVisible={false} bgColor='#0a66c2' height='5px'   className="progressBar" completed={step * 40} />
        <ApplicationForm step={step} />
      </div>
      <hr style={{ marginTop: "25px" }} />

      <div className="application_bottom">
        {step > 0 &&
          <button className='app_back_btn' onClick={() => setStep((step) => step - 1)}>Back</button>
        }
        {
          step < 2 &&
          <button className='app_next_btn' onClick={() => setStep((step) => step + 1)}>Next</button>
        }
        {
          step === 2 &&
          <button className='app_next_btn'>Apply</button>
        }
      </div>
    </div>
  )
}


export default JobApplication