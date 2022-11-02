import { PermMedia ,VideoCameraFront, Work } from '@mui/icons-material' 

import './share.scss'

const Share = () => {
  return (
    <div className="share">
      <div className='share_wrapper'>
          <div className="share_top">
            <img className='share_profile_img' src="./img_avatar.png" alt="" />
            <input className='share_input' placeholder='whats in your mind?' type="text" />
          </div>
          <hr className='share_hr' />
          <div className="share_bottom">

            <div className="share_options">
              <div className="share_option">
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
  )
}

export default Share            
