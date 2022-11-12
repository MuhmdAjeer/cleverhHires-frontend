import { useFormik } from 'formik'
import { TextField } from '@mui/material'

import Navbar from "../../../components/NavBar/Navbar"
import './PostJob.scss';
import { useState } from 'react';

const PostJob = () => {
    const [step, setStep] = useState(1)
    const [skills, setSkill] = useState([])
    const [skillValue, setSkillValue] = useState('')

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
    return (
        <>
            <Navbar />

            <div className="post_job_container">
                <div className="form_container">
                    <div className="form_inputs">
                        <h1>{step}</h1>
                        {(() => {

                            switch (step) {
                                case 1:
                                    return (
                                        <>
                                            <Input label='Job Role' name='jobRole' />
                                            <Input label='Location' name='location' />
                                            <Input label='Workplace Type' name='workplace' />
                                            <button className='next_btn' onClick={() => handleStep(1)} >Next</button>
                                        </>
                                    )
                                case 2:
                                    return (
                                        <>
                                            <Input label='Employment Type' name='employmentType' />
                                            <Input label='Min experience' number name='minimumExperience' />
                                            <Input label='Max experience' number name='maximumExperience' />
                                            <Input label='Min Salary' number name='minSalary' />
                                            <Input label='Max Salary' number name='maxSalary' />
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={() => handleStep(1)} >Next</button>
                                        </>

                                    )
                                case 3:
                                    return (
                                        <>
                                            <TextField label='Add a Required skill' variant='filled' fullWidth size='small' onKeyPress={addSkill} onChange={(e) => setSkillValue(e.target.value)} value={skillValue} />
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
                                            <button className='prev_btn' onClick={() => handleStep(-1)} >Prev</button>
                                            <button className='next_btn' onClick={() => handleStep(1)} >Next</button>
                                        </>
                                    )
                                case 4:
                                    return (
                                        <>
                                            <textarea placeholder='Add Job description....' className='job_description' name="" id="" cols="43" rows="20"></textarea>
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



const Input = ({ label, name, number }) => {
    if (number) {
        return (
            <TextField type={'number'} variant='filled' sx={{ marginBottom: "10px", width: "48.5%", marginRight: "5px" }} label={label} name={name} size='small' />
        )
    }

    return (
        <TextField variant='filled' sx={{ marginBottom: "10px" }} label={label} name={name} size='small' fullWidth />
    )
}

export default PostJob

