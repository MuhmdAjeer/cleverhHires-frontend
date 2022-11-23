import { Cancel } from '@mui/icons-material'
import ProgressBar from '@ramonak/react-progress-bar'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Swal from '@sweetalert/with-react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import './jobApplication.scss'
import ResumeViewer from '../Resume/ResumeViewer'
import { applyJob } from '../../redux/actions/jobs'
import { handleUpload } from '../../s3'
import { useEffect } from 'react'

const stepOne = {
  initialValues: {
    email: '',
    phone: '',
  },
  validation: new yup.ObjectSchema({
    email: yup.string().required('Required'),
    phone: yup.string().required('Required').test('len', 'Must be exactly 10 numbers', val => val.length === 10),
  })
}

const stepTwo = {
  initialValues: {
    joiningTime: '',
    ctc: ""
  },
  validation: new yup.ObjectSchema({
    joiningTime: yup.number().required('Required'),
    ctc: yup.number().required('Required')
  })
}







const JobApplication = ({ job,closeModal }) => {

  const [step, setStep] = useState(0)
  const [resume, setResume] = useState('')
  const [viewResume, setResumeView] = useState('')

  const dispatch = useDispatch()

  const formikOne = useFormik({
    initialValues: stepOne.initialValues,
    validationSchema: stepOne.validation,
    onSubmit: (values) => {
      setStep(step + 1)
    }
  })



  const formikTwo = useFormik({
    initialValues: stepTwo.initialValues,
    validationSchema: stepTwo.validation
  })

  const handleApply = (e)=>{
    e.preventDefault();

    handleUpload(resume).then((response)=>{
      const pdfUrl = response.location;
      const formData = {...formikOne.values,...formikTwo.values,pdfUrl}
      dispatch(applyJob(job._id,formData,closeModal))
    })
  }




  const handleResume = (event) => {
    const pdfFile = event.target.files[0];
    setResume(pdfFile)
  }

  const RemoveResume = () => {
    setResume('')
    setResumeView('')
  }

  const handleViewResume = (event) => {
    event.preventDefault()
    Swal(<ResumeViewer resume={viewResume} />)
  }


  return (
    <div style={{ width: "100%" }} >

      <div className="modal_top">
        <span className="modal_header">Apply to Google</span>
        <Cancel onClick={closeModal} className="cancel_icon" />
      </div>
      <div className="appliction_center"  >
        <ProgressBar animateOnRender isLabelVisible={false} bgColor='#0a66c2' height='5px' className="progressBar" completed={step * 40} />
        {/* <ApplicationForm step={step} /> */}
        {(() => {
          switch (step) {
            case 0:
              return (
                <>
                  <h5>Contact Info</h5>
                  <form className="application_form">
                    {/* <TextField fullWidth size='small' label='Email' color='primary' /> */}
                    <div className='form_div'  >
                      {formikOne.errors.email ? <h1>hello</h1> : null}
                      <TextField size='small' onBlur={formikOne.handleBlur} helperText={formikOne.errors.email } error={formikOne.errors.email && formikOne.touched.email} value={formikOne.values.email} onChange={formikOne.handleChange} name='email' sx={{ width: "250px", mb: '10px' }} label='Email' color='primary' />
                <TextField size='small' onBlur={formikOne.handleBlur} helperText={formikOne.errors.phone } error={formikOne.errors.phone   && formikOne.touched.phone} value={formikOne.values.phone} onChange={formikOne.handleChange} name='phone' sx={{ width: "250px" }} label='Phone' color='primary' />
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
                    <TextField helperText={formikTwo.errors.joiningTime} size='small' value={formikTwo.values.joiningTime} onChange={formikTwo.handleChange} name='joiningTime' label='Joining Time' color='primary' />
                    <h6 className='question' >whats the preffered CTC</h6>
                    <TextField size='small' value={formikTwo.values.ctc} onChange={formikTwo.handleChange} name='ctc' label='Email' color='primary' />
                    {/* </div> */}
                  </form>
                </>
              )

            default:
              break;
          }
        })()}
      </div>
      <hr style={{ marginTop: "25px" }} />

      <div className="application_bottom">
        {step > 0 &&
          <button className='app_back_btn' onClick={() => setStep((step) => step - 1)}>Back</button>
        }
        {
          step < 2 &&
          <button className='app_next_btn' type='submit' onClick={() => {
            if (step === 0) formikOne.handleSubmit()
            if (step === 1 && resume) setStep(step + 1)
            if (step === 2) formikTwo.handleSubmit()
          }}>Next</button>
        }
        {
          step === 2 &&
          <button onClick={handleApply} className='app_next_btn'>Apply</button>
        }
      </div>
    </div>
  )
}


export default JobApplication