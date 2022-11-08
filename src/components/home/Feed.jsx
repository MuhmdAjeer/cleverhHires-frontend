import "./feed.scss";
import Share from "./Share/Share";
import Post from "./Post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/user/posts").then(({ data }) => {
      setPosts(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="feed">
      <div className="feed_wrapper">
        <Share />
        {posts && posts.map((post) => <Post post={post} />)}
      </div>
    </div>
  );
}

export default Feed;
