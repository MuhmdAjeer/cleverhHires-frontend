import { Cancel } from "@mui/icons-material";
import { Checkbox, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

import './addExp.scss'

export default function AddExperience({ modalHandler }) {
    const [currentRole, setCurrentRole] = useState(false);
    return (
        <div className="create_post_modal">
            <div className="modal_top">
                <span className="modal_header">Add Experience</span>
                <Cancel onClick={() => modalHandler(false)} className="cancel_icon" />
            </div>
            <div className="modal_body">
                <div className="add_exp_container">
                    <span >Title</span>
                    <TextField size="small" placeholder="Ex : Frontend Developer" fullWidth name='title' />

                    <span>Employment Type</span>
                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                    <Select labelId="demo-simple-select-label" size="small" fullWidth  >
                        <MenuItem>Full-Time</MenuItem>
                        <MenuItem>Part-Time</MenuItem>
                        <MenuItem>Intern</MenuItem>
                        <MenuItem>Trainee</MenuItem>
                    </Select>


                    <span>Company name</span>
                    <TextField size="small" fullWidth placeholder='Ex : Apple' name='title' />


                    <span>Location</span>
                    <TextField size="small" fullWidth placeholder='Ex : Mumbai' name='title' />

                    <div>
                        <FormControlLabel control={<Checkbox onChange={(e) => setCurrentRole(!currentRole)} defaultChecked />} label="I am currently working in this role" />
                    </div>
                    <span>Start Date</span>
                    <div>
                        <Select sx={{ width: '45%', marginRight: '10px' }} labelId="demo-simple-select-label" size="small" >
                            <MenuItem>Full-Time</MenuItem>
                        </Select>
                        <Select sx={{ width: '45%' }} labelId="demo-simple-select-label" size="small"  >
                            <MenuItem>Full-Time</MenuItem>
                        </Select>
                    </div>

                            <span>End Date</span>
                            <div>
                                <Select disabled={!currentRole} sx={{ width: '45%', marginRight: '10px' }} labelId="demo-simple-select-label" size="small" >
                                    <MenuItem>Full-Time</MenuItem>
                                </Select>
                                <Select disabled={!currentRole}  sx={{ width: '45%' }} labelId="demo-simple-select-label" size="small"  >
                                    <MenuItem>Full-Time</MenuItem>
                                </Select>
                            </div>
        

                    {/* <span>Start Date</span> */}


                </div>
            </div>
            <div className="modal_bottom">
                <div className="modal_actions">
                    <button className="btn_done">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}