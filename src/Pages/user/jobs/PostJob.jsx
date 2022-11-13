import { useFormik } from 'formik'
import { TextField } from '@mui/material'
import * as yup from 'yup'


import Navbar from "../../../components/NavBar/Navbar"
import './PostJob.scss';
import { useState } from 'react';

const PostJob = () => {
    const [step, setStep] = useState(1)
    const [skills, setSkill] = useState([])
    const [skillValue, setSkillValue] = useState('')

    
    const initialValues = {
        jobRole : '',
        location : "",
        workplace : "",
        employmentType : "",
        minimumExperience: '', 
        maximumExperience:'', 
        minSalary : '',
        maxSalary : '',
        skills : [],
        description : ""
    }
    const validation = new yup.ObjectSchema({
        jobRole : yup.string().required('Required'),
        location : yup.string().required('Required'),
        workplace : yup.string().required('Required'),
        employmentType  : yup.string().required('Required'),
        minimumExperience : yup.number().required('Required'),
        maximumExperience : yup.number().required('Required'),
        minSalary : yup.number().required('Required'),
        maxSalary : yup.number().required('Required'),
        description : yup.string().required('Required') 
    })
    
    const formik = useFormik({
        initialValues,
        validationSchema : validation,
        onSubmit : (values)=>{
            console.log(values);
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
            if(step === 1 & !formik.errors.jobRole && !formik.errors.location && !formik.errors.workplace){
                setStep(step + 1)
            }
        }

    }

    const removeSkill = (removingSkill) => {
        setSkill((current) => current.filter((skill) => skill !== removingSkill))
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
                                        
                                            <Input  error={formik.errors.jobRole && formik.touched.jobRole} label='Job Role' value={formik.values.jobRole} onChange={formik.handleChange} name='jobRole' />
                                            <Input error={formik.errors.location && formik.touched.location} label='Location' value={formik.values.location} onChange={formik.handleChange}  name='location' />
                                            <Input onChange={formik.handleChange} value={formik.values.workplace} error={formik.errors.workplace && formik.touched.workplace} label='Workplace Type' name='workplace' />
                                            <button onClick={formik.handleSubmit}> dd</button>
                                            <button className='next_btn'  onClick={() => handleStep(1)} >Next</button>
                                        </>
                                    )
                                case 2:
                                    return (
                                        <>
                                            <Input onChange={formik.handleChange} value={formik.values.employmentType} error={formik.errors.employmentType && formik.touched.employmentType} label='Employment Type' name='employmentType' />
                                            <Input onChange={formik.handleChange} value={formik.values.minimumExperience} error={formik.errors.minimumExperience && formik.touched.minimumExperience} label='Min experience' number name='minimumExperience' />
                                            <Input onChange={formik.handleChange} value={formik.values.maximumExperience} error={formik.errors.maximumExperience && formik.touched.maximumExperience} label='Max experience' number name='maximumExperience' />
                                            <Input onChange={formik.handleChange} value={formik.values.minSalary} error={formik.errors.minSalary && formik.touched.minSalary} label='Min Salary' number name='minSalary' />
                                            <Input onChange={formik.handleChange} value={formik.values.maxSalary} error={formik.errors.maxSalary && formik.touched.maxSalary} label='Max Salary' number name='maxSalary' />
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={() => handleStep(1)} >Next</button>
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
                                            <textarea value={formik.values.description} onChange={formik.handleChange} required placeholder='Add Job description....' className='job_description' name="description" id="" cols="43" rows="20"></textarea>
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn'  >Post Job</button>
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



const Input = ({ label, name, number , value,onChange ,error }) => {
    if (number) {
        return (
            <TextField error={error} onChange={onChange} value={value}  type={'number'} variant='filled' sx={{ marginBottom: "10px", width: "48.5%", marginRight: "5px" }} label={label} name={name} size='small' />
        )
    }

    return (
        <TextField error={error} variant='filled' value={value} onChange={onChange} sx={{ marginBottom: "10px" }} label={label} name={name} size='small' fullWidth />
    )
}

export default PostJob

