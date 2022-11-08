import moment from "moment";

import "./post.scss";
import { MoreVert, ThumbUp, Comment } from "@mui/icons-material";

export default function Post({ post }) {
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
          <span className="post_text">Hey! its my first Post:</span>
          <img src={post.imageUrl} className="post_img" alt="" />
        </div>
        <div className="post_bottom">
          <div className="post_bottom_left">
            <ThumbUp className="like_btn" />
            <Comment className="like_btn" />
            <span className="post_like_counter">125 people like it</span>
          </div>
          <div className="post_bottom_right">
            <span className="post_comment_text">8 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
