import React, { useState } from "react";
import { Cancel } from "@mui/icons-material";
import * as API from "../../../../api/index";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

import { getAllPosts, uploadPost } from "../../../../actions/posts";
import "./createPost.scss";
import axios from "axios";
import toast from "react-hot-toast";

export const CreatePost = ({ close }) => {
  const location = useLocation();

  const [selectedImage, setImage] = useState(null);
  const [uploadSource, setSource] = useState("");
  const [description, setDescription] = useState("");
  const  dispatch =   useDispatch()

  const handlePostImage = (event) => {
    const image = event.target.files[0];
    setSource(image);
    console.log(image);
    const imgURL = URL.createObjectURL(image);
    setImage(imgURL);
  };

  const handleClose = () => {
    close();
    setImage(null);
  };

  const handleSubmit = async () => {
    if (!uploadSource) return;
    console.log(uploadSource, "sdfa");
    const reader = new FileReader();
    reader.readAsDataURL(uploadSource);
    reader.onloadend = () => {
      uploadFile(reader.result);
    };
  };

  const uploadFile = (file) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    console.log(location);
    axios
      .post(
        "http://localhost:5000/api/v1/user/post",
        { image: file, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        dispatch({type:'UPDATE_POST'})
        // dispatch(getAllPosts())
        toast.success("Post Uploaded successfully");
        close();
        setImage(null);
      })
      .catch((err) => {
        toast.error("Post upload Failed");
      });
  };

  return (
    <>
      <div className="create_post_modal">
        <div className="modal_top">
          <span className="modal_header">Create a post</span>
          <Cancel onClick={close} className="cancel_icon" />
        </div>
        <div className="modal_body">
          {selectedImage ? (
            <div className="imageContainer">
              <textarea
                label="add a description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="What do you want to talk about?"
                className="create_post_input"
                type="text"
              />
              <img src={selectedImage} className="new_post_img" alt="" />
            </div>
          ) : (
            <>
              <input
                onChange={(e) => handlePostImage(e)}
                type="file"
                id="image_input"
              />
              <label className="img_label" htmlFor="image_input">
                Select image to share
              </label>
            </>
          )}
        </div>
        <div className="modal_bottom">
          <div className="modal_actions">
            <button className="btn_cancel" onClick={handleClose}>
              Cancel
            </button>
            <button onClick={handleSubmit} className="btn_done">
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
