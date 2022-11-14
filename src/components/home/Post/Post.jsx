import moment from "moment";

import "./post.scss";
import { MoreVert, ThumbUp, Comment, SendRounded, MoreHoriz, ThumbUpOffAltOutlined} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, likePost } from "../../../actions/posts";

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
   
  useEffect(()=>{
    console.log('called');
    setLiked(post?.likes?.includes('636164323443e7ff76d3454d'))
    // setLiked(post.likes.some((like)=> like === '636164323443e7ff76d3454d'))
  },[post])

  return (
    <div className="post">
      <div className="post_wrapper">
        <div className="post_top">
          <div className="post_top_left">
            <img className="post_profile_img" src="./img_avatar.png" alt="" />
            <span className="post_username">{post.user.lastName}</span>
            <span className="post_date">{moment(post.postedAt).fromNow()}</span>
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
              // <ThumbUp htmlColor="tomato" className="like_btn" />
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
          <SendRounded className="sendIcon" />
          }
        </div>
        <hr />
        <div className="comments_box">
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        </div>
      </div>
      }
      </div>
    </div>
  );
}

const CommentCard = ()=>{
  return(
    <div className="comment_card" >
      <img src="../avatar.jpeg" alt="" />
      <div className="comment_details">
        <div className="comm_details_left">
        <span className="commenter">Shahbas Ahsan</span>
        <span>Hello nice post</span>
        </div>
        <div className="comm_details_right">
        <span>22m</span>
        <MoreHoriz/>
        </div>

      </div>
    </div>
  )
}
