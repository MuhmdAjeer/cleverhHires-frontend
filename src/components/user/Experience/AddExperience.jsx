import { Cancel } from "@mui/icons-material";
import { Checkbox, FormControlLabel, InputLabel, Menu, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik} from 'formik'
import {useDispatch} from 'react-redux'
import { addExperience } from "../../../redux/actions/users";

import { MONTHS,YEARS } from "../../../constants/date";
import './addExp.scss';



export default function AddExperience({ modalHandler }) {
    const [currentRole, setCurrentRole] = useState(false);
    const [startMonth,setStartMonth] = useState('')
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : {
            title : '',
            employmentType : '',
            companyName : '',
            location : '',
            startMonth : '',
            startYear : '',
            endYear : '',
            endMonth : '',
        },
        onSubmit : (values)=>{
            handleSubmit(values)
        }
    })
    const handleSubmit = (values)=>{
        const experience = {
            ...values,
            currentRole
        }

        dispatch(addExperience())
        
    }
    return (
        <div className="create_post_modal">
            <div className="modal_top">
                <span className="modal_header">Add Experience</span>
                <Cancel onClick={() => modalHandler(false)} className="cancel_icon" />
            </div>
            <div className="modal_body">
                <div className="add_exp_container">
                    <span >Title</span>
                    <TextField size="small" value={formik.values.title} onChange={formik.handleChange} placeholder="Ex : Frontend Developer" fullWidth name='title' />

                    <span>Employment Type</span>
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select labelId="demo-simple-select-label" value={formik.values.employmentType} name='employmentType' onChange={formik.handleChange}  size="small" fullWidth  >
                        <MenuItem value={'Full-Time'} >Full-Time</MenuItem>
                        <MenuItem value={'Part-Time'} >Part-Time</MenuItem>
                        <MenuItem value={'Intern'} >Intern</MenuItem>
                        <MenuItem value={'Trainee'} >Trainee</MenuItem>
                    </Select>


                    <span>Company name</span>
                    <TextField  size="small" value={formik.values.companyName} onChange={formik.handleChange} fullWidth placeholder='Ex : Apple' name='companyName' />


                    <span>Location</span>
                    <TextField size="small" value={formik.values.location} onChange={formik.handleChange} fullWidth placeholder='Ex : Mumbai' name='location' />

                    <div>
                        <FormControlLabel control={<Checkbox onChange={(e)=>setCurrentRole(e.target.checked)} name='currentRole' checked={currentRole} />} label="I am currently working in this role" />
                    </div>
                    <span>Start Date</span>
                    <div>
                        <Select value={formik.values.startMonth} onChange={formik.handleChange} name='startMonth' sx={{ width: '45%', marginRight: '10px' }} labelId="demo-simple-select-label" size="small" >
                        {MONTHS.map((month) => <MenuItem value={month} >{month}</MenuItem>)}

                        </Select>
                        <Select value={formik.values.startYear} onChange={formik.handleChange} name='startYear' sx={{ width: '45%' }} labelId="demo-simple-select-label" size="small"  >
                        { YEARS &&  YEARS.map((year)=> <MenuItem value={year} >{year}</MenuItem>)}

                        </Select>
                    </div>

                    <span>End Date</span>
                    <div>
                        <Select value={formik.values.endMonth} onChange={formik.handleChange} name='endMonth' maxRows={5} disabled={currentRole} sx={{ width: '45%', marginRight: '10px' }} labelId="demo-simple-select-label" size="small" >
                            {MONTHS.map((month) => <MenuItem value={month} >{month}</MenuItem>)}
                        </Select>
                        <Select value={formik.values.endYear} onChange={formik.handleChange} name='endYear' disabled={currentRole} sx={{ width: '45%' }} labelId="demo-simple-select-label" size="small"  >
                            { YEARS &&  YEARS.map((year)=> <MenuItem value={year} >{year}</MenuItem>)}
                        </Select>
                    </div>
                    <button onClick={formik.handleSubmit} > d</button>


                    {/* <span>Start Date</span> */}


                </div>
            </div>
            <div className="modal_bottom">
                <div className="modal_actions">
                    <button type="submit" onClick={formik.handleSubmit} className="btn_done">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}