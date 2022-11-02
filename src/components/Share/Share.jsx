import { Cancel, PermMedia ,VideoCameraFront, Work } from '@mui/icons-material' 
import { useState } from 'react';
import Modal from '../modal/Modal';


import './share.scss'

const MODAL_STYLE = {
  position:"fixed",
  display:"flex",
  width:"40%",
  top:'30%',
  borderRadius : "10px",
  left:'50%',
  transform:"translate(-50%,-50%)",
  backgroundColor:"#fff",
  padding:'20px',
  zIndex:1000
}

const Share = () => {

const [isOpen,setOpen] = useState(false);



  return (
    <>
    <div className="share">
      <div className='share_wrapper'>
          <div className="share_top">
            <img className='share_profile_img' src="./avatar.jpeg" alt="" />
            <input className='share_input' placeholder='whats in your mind?' type="text" />
          </div>
          <hr className='share_hr' />
          <div className="share_bottom">

            <div className="share_options">
              <div className="share_option" onClick={()=>setOpen(!isOpen)} >
              <PermMedia htmlColor='#2274A5' className='share_icon' />
               <span className='share_option_text'>Photo</span>
              </div>
              <div className="share_option">
              <VideoCameraFront htmlColor='#00B147' className='share_icon' />
               <span className='share_option_text'>Video</span>
              </div>
              <div className="share_option">
              <Work htmlColor="#8300C1" className='share_icon' />
               <span className='share_option_text'>Job</span>
              </div>
 
            </div>
          </div>
      </div>
    </div>
    <Modal containerStyle={MODAL_STYLE} open={isOpen} onClose={()=>setOpen(false)} >
      <div className="create_post_modal">
        <div className="modal_top">
          <span className='modal_header'>Create a post</span>
          <Cancel onClick={()=>setOpen(false)} className='cancel_icon' />
        </div>
        <div className="modal_body">
            <input type="file" id='image_input' />
            <label className='img_label' htmlFor="image_input">Select image to share</label>
        </div>
        <div className="modal_bottom">
          <div className="modal_actions">
            <button className='btn_cancel' >Cancel</button>
            <button className='btn_done' >Done</button>
          </div>
        </div>
      </div>
    </Modal>
    </>
    
  )
}

export default Share            
