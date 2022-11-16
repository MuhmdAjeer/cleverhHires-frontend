import { useFormik } from 'formik'
import { TextField } from '@mui/material'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'


import Navbar from "../../../components/NavBar/Navbar"
import './PostJob.scss';
import { useState } from 'react';
import { postJob } from '../../../redux/actions/jobs'

const PostJob = () => {
    const [step, setStep] = useState(1)
    const [skills, setSkill] = useState([])
    const [skillValue, setSkillValue] = useState('')
    const [description,setDescription] = useState('')
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    
    const initialValuesStep1 = {
        jobRole : '',
        location : "",
        workplace : "",
        employmentType : "",

    }

    const initialValuesStep2 = {
        vaccancies : '',
        minimumExperience: '', 
        maximumExperience:'', 
        minSalary : '',
        maxSalary : '',
        skills : [],
        description : ""
    }
    const stepOneValidation = new yup.ObjectSchema({
        jobRole : yup.string().required('Required'),
        location : yup.string().required('Required'),
        workplace : yup.string().required('Required'),
        employmentType  : yup.string().required('Required'),
    })
    
    const stepTwoValidation = new yup.ObjectSchema({
        vaccancies : yup.number().required('Required').min(1),
        minimumExperience : yup.number().required('Required'),
        maximumExperience : yup.number().required('Required'),
        minSalary : yup.number().required('Required'),
        maxSalary : yup.number().required('Required')       
    })

    const step1 =useFormik({
        initialValues : initialValuesStep1,
        validationSchema : stepOneValidation,
        onSubmit : (values)=>{
            setStep(step + 1)
        }
    })

    const step2 = useFormik({
        initialValues : initialValuesStep2,
        validationSchema : stepTwoValidation,
        onSubmit : (values)=>{
            setStep(step + 1)
        }
    })
    

    const addSkill = (e) => {
        console.log(skills);
        if (e.key === 'Enter' && !skills.includes(skillValue) && skills.length < 5 && skillValue !== '') {
            setSkill([...skills, skillValue])
            setSkillValue('')
        }
    }

    const handleStep = (count) => {
        if (count === -1 && step !== 1) {   
            setStep(step - 1)
        }
        if (count === 1 && step !== 4) {
                setStep(step + 1)
        }

    }

    const removeSkill = (removingSkill) => {
        setSkill((current) => current.filter((skill) => skill !== removingSkill))
    }


    const handleJobUpload = ()=>{
        const jobPostForm = {...step1.values,...step2.values,skills,description}
        dispatch(postJob(jobPostForm,navigate,setLoading))
    }
    return (
        <>
            <Navbar />

            <div className="post_job_container">
                <div className="form_container">
                    <div className="form_inputs">
                        <h1 className='post_job_heading' >Post Job</h1>
                    
                        {(() => {

                            switch (step) {
                                case 1:
                                    return (
                                        <>
                                            <Input  error={step1.errors.jobRole && step1.touched.jobRole} label='Job Role' value={step1.values.jobRole} onChange={step1.handleChange} name='jobRole' />
                                            <Input error={step1.errors.location && step1.touched.location} label='Location' value={step1.values.location} onChange={step1.handleChange}  name='location' />
                                            <Input onChange={step1.handleChange} value={step1.values.workplace} error={step1.errors.workplace && step1.touched.workplace} label='Workplace Type' name='workplace' />
                                            <Input onChange={step1.handleChange} value={step1.values.employmentType} error={step1.errors.employmentType && step1.touched.employmentType} label='Employment Type' name='employmentType' />
                                            {/* <button onClick={step1.handleSubmit}> dd</button> */}
                                            <button className='next_btn'  onClick={step1.handleSubmit} >Next</button>
                                        </>
                                    )
                                case 2:
                                    return (
                                        <>
                                            <Input onChange={step2.handleChange} value={step2.values.vaccancies} error={step2.errors.vaccancies && step2.touched.vaccancies} label='vaccancies'  fullnumber name='vaccancies' />
                                            <Input onChange={step2.handleChange} value={step2.values.minimumExperience} error={step2.errors.minimumExperience && step2.touched.minimumExperience} label='Min experience' number name='minimumExperience' />
                                            <Input onChange={step2.handleChange} value={step2.values.maximumExperience} error={step2.errors.maximumExperience && step2.touched.maximumExperience} label='Max experience' number name='maximumExperience' />
                                            <Input onChange={step2.handleChange} value={step2.values.minSalary} error={step2.errors.minSalary && step2.touched.minSalary} label='Min Salary' number name='minSalary' />
                                            <Input onChange={step2.handleChange} value={step2.values.maxSalary} error={step2.errors.maxSalary && step2.touched.maxSalary} label='Max Salary' number name='maxSalary' />
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={step2.handleSubmit} >Next</button>
                                        </>

                                    )
                                case 3:
                                    return (
                                        <>
                                            <TextField label='Add Required skills' variant='filled' fullWidth size='small' onKeyPress={addSkill} onChange={(e) => setSkillValue(e.target.value)} value={skillValue} />
                                            {/* <button onClick={addSkill} >yyyy</button> */}
                                            {/* <Input  label='Add a Skill'/> */}

                                            <div className='skills' >
                                                {
                                                    skills && skills.map((skill) => (
                                                        <div onClick={() => removeSkill(skill)} className="skill">
                                                            <span>{skill}</span>

                                                        </div>

                                                    ))
                                                }


                                            </div>
                                            <button  className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={() => handleStep(1)} >Next</button>
                                        </>
                                    )
                                case 4:
                                    return (
                                        <>
                                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  required placeholder='Add Job description....' className='job_description' name="description" id="" cols="43" rows="20"></textarea>
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={handleJobUpload} >Post Job</button>
                                        </>
                                    )
                                default:
                                    break;
                            }
                        })()

                        }
                    </div>
                </div>
            </div>
        </>
    )

}



const Input = ({ label, name, number , value,onChange ,error ,fullnumber }) => {
    if (number) {
        return (
            <TextField error={error} onChange={onChange} value={value}  type={'number'} variant='filled' sx={{ marginBottom: "10px", width: "48.5%", marginRight: "5px" }} label={label} name={name} size='small' />
        )
    }

    if(fullnumber){
        return (
            <TextField error={error} onChange={onChange} value={value}  type={'number'} variant='filled' sx={{ marginBottom: "10px"}} fullWidth label={label} name={name} size='small' />
        )
    }

    return (
        <TextField error={error} variant='filled' value={value} onChange={onChange} sx={{ marginBottom: "10px" }} label={label} name={name} size='small' fullWidth />
    )
}

export default PostJob

