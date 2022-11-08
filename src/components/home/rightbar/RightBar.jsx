import { Group, People, RssFeed, Work } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "./rightbar.scss";

export const RightBar = () => {
  const navigate = useNavigate();

  return (
    <div className="card_container">
      <div className="card">
        {/* <div className="profile">
          <img className='image' src="./avatar.jpeg" alt="" />
          <h2  >user?.name</h2>
        </div> */}
        <ul>
          <li onClick={() => navigate("/become-hirer")}>
            {/* <RssFeed /> */}
            <span>Post Jobs</span>
          </li>
          <li>
            {/* <Work /> */}
            <span>Manage Job posts</span>
          </li>
          {/* <li>
            <People/>
            <span>Connections</span>
            </li>
            <li>
            <Group />
            <span>Followers</span>
          </li> */}
        </ul>
      </div>
      <ul className="footer">
        <li>linkedin</li>
        <li>asdffsd</li>
        <li>333</li>
      </ul>
    </div>
  );
};
