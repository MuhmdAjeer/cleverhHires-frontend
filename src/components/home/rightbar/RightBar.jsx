import { Group, People, RssFeed, Work } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./rightbar.scss";

export const RightBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card_container">
      <div className="card">
        <ul>
          <li onClick={() => navigate("/become-hirer")}>
            <span>Post Jobs</span>
          </li>
          <li>
            <span>Manage Job posts</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
