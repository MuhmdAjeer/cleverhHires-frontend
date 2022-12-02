import { Group, People, RssFeed, Work } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./rightbar.scss";

export const RightBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="rightbar_card_container">
      <div className="right_bar_card">
        <ul>
          <li onClick={() => navigate("/post-job")}>
            <span>Post Job</span>
          </li>
          <li onClick={() => navigate("/posted-jobs")} >
            <span>My Job posts</span>
          </li>
          <li onClick={() => navigate("/become-hirer")} >
            <span>Be a Hirer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
