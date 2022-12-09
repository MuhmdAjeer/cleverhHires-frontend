import { useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import { CreatePost } from "./create-post/CreatePost";
import EmojiPicker from 'emoji-picker-react'
import InputEmoji from 'react-input-emoji'
import {
  Article,
  EmojiEmotionsOutlined,
  EmojiEmotionsRounded,
  PermMedia,
  Send,
  VideoCameraFront,
} from "@mui/icons-material";
import * as API from "../../../api/index"; 




import "./share.scss";

const MODAL_STYLE = {
  position: "fixed",
  display: "flex",
  width: "40%",
  top: "50%",
  borderRadius: "10px",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#fff",
  padding: "20px",
  zIndex: 1000,
};

const Share = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedImage, setImage] = useState(null);
  const [user,setUser] = useState()
  const [input, setInput] = useState("");
  const [share, setShare] = useState(false);
  const [showEmoji,setShowEmoji] = useState(false)
  const handlePostImage = (event) => {
    const image = event.target.files[0];
    console.log(image);
    const imgURL = URL.createObjectURL(image);
    setImage(imgURL);
  };

  const handleEmojiPicker = ()=>{
    setShowEmoji(!showEmoji)
  }

  const handleInput = (event) => {
    setInput(event.target.value);
    if (!input) {
      setShare(false);
    }
  };

  const handleEmojiSelect = ({emoji})=>{
    console.log(emoji);
    setInput(input+emoji)
  }

  useEffect(()=>{
    const { user : User } = JSON.parse(localStorage.getItem('user'))
    API.getProfile(User?.username).then(({ data }) => {
      setUser(data)
    })
  },[])

  return (
    <>
      <div className="share">
        <div className="share_wrapper">
          <div className="share_top">
            <img className="share_profile_img" src={`${user?.profileImage ? user?.profileImage : '../avatarIcon.jpg'}`} alt="" />
            <textarea
              className="share_input"
              value={input}
              onChange={handleInput}
              placeholder="whats in your mind?"
              type="text"
              />
                    {/* <InputEmoji
          // value={text}
          // onChange={setText}
          cleanOnEnter
          height={90}
          // onEnter={handleOnEnter}
          placeholder="Type a message"
        /> */}

        <EmojiEmotionsOutlined className="emojiBtn" onClick={handleEmojiPicker} htmlColor="grey"/>

  
          </div>

          <hr className="share_hr" />
          <div className="share_bottom">
            <div className="share_options">
        {
          showEmoji &&
          <div style={{zIndex:'4',position:'absolute',marginLeft : "252px" }} >
            <EmojiPicker  height={400} onEmojiClick={handleEmojiSelect} /> 
          </div>

        }
              <div className="share_option" onClick={() => setOpen(!isOpen)}>
                <PermMedia htmlColor="#2274A5" className="share_icon" />
                <span className="share_option_text">Photo</span>
              </div>
              <div className="share_option">
                <VideoCameraFront htmlColor="#00B147" className="share_icon" />
                <span className="share_option_text">Video</span>
              </div>
              <div className="share_option">
                <Article htmlColor="#8300C1" className="share_icon" />
                <span className="share_option_text">Job</span>
              </div>
              {input && (
                <div className="share_option">
                  <Send htmlColor="red" className="share_icon" />
                  <span className="share_option_text">Post</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        containerStyle={MODAL_STYLE}
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <CreatePost close={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default Share;
