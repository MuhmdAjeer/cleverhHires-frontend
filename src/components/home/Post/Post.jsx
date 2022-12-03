import moment from "moment";

import "./post.scss";
import { MoreVert, ThumbUp, Comment, SendRounded, MoreHoriz, ThumbUpOffAltOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, addComment , deletePost} from "../../../redux/actions/posts";
import swal from 'sweetalert2/dist/sweetalert2'

import {  Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  console.log(post);
  const [commentOpen, setCommentOpen] = useState(false)
  const [comment, setComment] = useState('')
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()
  const updated = useSelector((state) => state.posts.updated)
  const [ownPost, setOwnPost] = useState(false)
  const navigate = useNavigate()


  const handleLike = (postId) => {
    dispatch(likePost(postId, setLiked))
  }

  
  const handleComment = () => {
    dispatch(addComment(comment, post._id))
    setComment('')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))

    if (post.user._id === user?.user?._id) {
      setOwnPost(true)
    }
    setLiked(post?.likes?.includes(user?.user?._id))
  }, [post])
  
  const handleDelete = (postId) => {
    handleClose()
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(postId))
      }
    })
  }
  return (
    <div className="post">

      <div className="post_wrapper">
        <div className="post_top">
          <div onClick={()=> navigate(`profile/${post?.user?.username}`)} className="post_top_left">
            <img className="post_profile_img" src={`${post.user?.profileImage ? post.user?.profileImage : '../avatarIcon.jpg'}`} alt="" />
            <div>

              <span className="post_username">{post?.user?.lastName}</span>
              <span className="post_date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <div className="post_top_right">
            {ownPost && 
            <MoreVert onClick={handleClick} className="more_icon" />
            }
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={()=>handleDelete(post._id)}>Delete</MenuItem>
      </Menu>

          </div>
        </div>
        <div className="post_center">
          <span className="post_text">{post.description}</span>
          <img src={post.imageUrl} className="post_img" alt="" />
        </div>
        <div className="post_bottom">
          <div className="post_bottom_left">
            {
              liked ?
                <ThumbUp onClick={() => handleLike(post._id)} className="like_btn" />
                :
                <ThumbUpOffAltOutlined onClick={() => handleLike(post._id)} className="like_btn" />
            }

            <Comment onClick={() => setCommentOpen(!commentOpen)} className="like_btn" />
            <span className="post_like_counter">{post?.likes?.length} people like it</span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment_text">{post?.comments?.length} comments</span>
          </div>
        </div>
        {/* comment section */}
        {
          commentOpen &&
          <div className="comment_container">
            <div className="comment_input">
              <img src="../avatar.jpeg" alt="" />
              <textarea autoFocus value={comment} onChange={(event) => setComment(event.target.value)} placeholder="Enter a comment" type="text" />
              {
                comment.length > 0 &&
                <SendRounded onClick={handleComment} className="sendIcon" />
              }
            </div>
            <hr />
            <div className="comments_box">
              {
                post.comments[0] && post.comments
                  .map((comment) => (
                    <CommentCard comment={comment} />
                  ))
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

const CommentCard = ({ comment }) => {
  return (
    <div className="comment_card" >
      <img src={`${comment.user?.profileImage ? comment.user?.profileImage : '../avatarIcon.jpg'}`} alt="" />
      <div className="comment_details">
        <div className="comm_details_left">
          <span className="commenter">{comment?.user.lastName}</span>
          <span>{comment?.comment}</span>
        </div>
        <div className="comm_details_right">
          {console.log(comment.commentedAt)}
          <span>{moment(comment?.commentedAt).fromNow()}</span>
          <MoreHoriz />
        </div>
      </div>
    </div>
  )
}
