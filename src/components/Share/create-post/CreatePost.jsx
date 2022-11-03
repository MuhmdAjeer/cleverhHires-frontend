import React, { useState } from 'react'
import { Cancel } from '@mui/icons-material'
import './createPost.scss';

export const CreatePost = ({ close }) => {

    const [selectedImage, setImage] = useState(null)
    const handlePostImage = (event) => {
        const image = event.target.files[0];
        console.log(image);
        const imgURL = URL.createObjectURL(image)
        setImage(imgURL);
    }

    const handleClose  = ()=>{
        close()
        setImage(null);
    }
    return (
        <>
            <div className="create_post_modal">
                <div className="modal_top">
                    <span className='modal_header'>Create a post</span>
                    <Cancel onClick={close} className='cancel_icon' />
                </div>
                <div className="modal_body">
                    {
                        selectedImage ?
                            <div className='imageContainer'>
                                <input label="add a description" placeholder='What do you want to talk about?' className='create_post_input' type="text" />
                                <img src={selectedImage} className="new_post_img" alt="" />
                            </div>
                            :
                            <>
                                <input onChange={(e) => handlePostImage(e)} type="file" id='image_input' />
                                <label className='img_label' htmlFor="image_input">Select image to share</label>
                            </>
                    }
                </div>
                <div className="modal_bottom">
                    <div className="modal_actions">
                        <button className='btn_cancel' onClick={handleClose} >Cancel</button>
                        <button className='btn_done' >Done</button>
                    </div>
                </div>
            </div>
        </>
    )
}
