import { useEffect, useState, lazy, Suspense } from "react";
import axios from 'axios'

import "./feed.scss";
import Share from "./Share/Share";
import Post from "./Post/Post"
import { POSTS } from "../../constants/actionTypes";
import { responsiveFontSizes, Skeleton } from "@mui/material";
import { useDispatch , useSelector } from "react-redux";
import { getAllPosts } from "../../actions/posts";

function Feed() {
  // const [posts, setPosts] = useState([]);
  const [postUpdate,setUpdated] = useState(false)
  const posts = useSelector((state)=> state.posts.posts)
  const updated = useSelector((state)=>state.posts.updated)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(getAllPosts());
  },[updated]);


  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {posts[0] && posts.map((post) => <Post post={post} />)}
      </div>
    </div>
  );
}

export default Feed;
