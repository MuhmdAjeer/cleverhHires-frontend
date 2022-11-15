import moment from "moment";

import "./post.scss";
import { MoreVert, ThumbUp, Comment, SendRounded, MoreHoriz, ThumbUpOffAltOutlined} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, likePost , addComment} from "../../../actions/posts";

export default function Post({ post }) {
  console.log(post);
  const [commentOpen,setCommentOpen] = useState(false)
  const [comment,setComment] = useState('')
  const [liked,setLiked] = useState(false)
  const dispatch = useDispatch()
  const updated = useSelector((state)=>state.posts.updated)

  const handleLike = (postId)=>{
    dispatch(likePost(postId,setLiked))
  }

  const handleComment = ()=>{
    dispatch(addComment(comment,post._id))
    setComment('')
  }
   
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    setLiked(post?.likes?.includes(user?.user?._id))
  },[post])

  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img className="post_profile_img" src={`${post.user?.profileImg ? post.user?.profileImg : '../avatarIcon.jpg' }`} alt="" />
            <div>

            <span className="post_username">{post?.user?.lastName}</span>
            <span className="post_date">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <div className="post_top_right">
            <MoreVert className="more_icon" />
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
              <ThumbUp onClick={()=>handleLike(post._id)} className="like_btn" />
              :
              <ThumbUpOffAltOutlined onClick={()=>handleLike(post._id)} className="like_btn" />
            }
          
            <Comment onClick={()=>setCommentOpen(!commentOpen)} className="like_btn" />
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
          <img  src="../avatar.jpeg" alt="" />
          <textarea autoFocus value={comment} onChange={(event)=>setComment(event.target.value)}  placeholder="Enter a comment" type="text" />
          {
          comment.length > 0 &&
          <SendRounded onClick={handleComment} className="sendIcon" />
          }
        </div>
        <hr />
        <div className="comments_box">
          {
            post.comments[0] && post.comments
            .sort((a,b)=> {
              console.log({a,b});
              return b.commentedAt - a.commentedAt
            })
            .map((comment)=>(
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

const CommentCard = ({comment})=>{
  return(
    <div className="comment_card" >
      <img src={`${comment.user?.profileImg ? comment.user?.profileImg : '../avatarIcon.jpg' }`} alt="" />
      <div className="comment_details">
        <div className="comm_details_left">
        <span className="commenter">{comment?.user.lastName}</span>
        <span>{comment?.comment}</span>
        </div>
        <div className="comm_details_right">
          {console.log(comment.commentedAt)}
        <span>{moment(comment?.commentedAt).fromNow()}</span>
        <MoreHoriz/>
        </div>
      </div>
    </div>
  )
}
