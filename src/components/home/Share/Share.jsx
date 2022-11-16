import { useState } from "react";
import Modal from "../../modal/Modal";
import { CreatePost } from "./create-post/CreatePost";
import {
  Article,
  PermMedia,
  Send,
  VideoCameraFront,
} from "@mui/icons-material";

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
  const [input, setInput] = useState("");
  const [share, setShare] = useState(false);
  const handlePostImage = (event) => {
    const image = event.target.files[0];
    console.log(image);
    const imgURL = URL.createObjectURL(image);
    setImage(imgURL);
  };

  const handleInput = (event) => {
    setInput(event.target.value);
    if (!input) {
      setShare(false);
    }
  };

  return (
    <>
      <div className="share">
        <div className="share_wrapper">
          <div className="share_top">
            <img className="share_profile_img" src="./avatar.jpeg" alt="" />
            <textarea
              className="share_input"
              value={input}
              onChange={handleInput}
              placeholder="whats in your mind?"
              type="text"
            />
          </div>
          <hr className="share_hr" />
          <div className="share_bottom">
            <div className="share_options">
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