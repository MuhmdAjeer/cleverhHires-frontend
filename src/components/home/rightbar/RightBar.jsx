import { Group, People, RssFeed, Work } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../../redux/actions/users";
import * as API from '../../../api/index'


import "./rightbar.scss";

export const RightBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hirer, setHirer] = useState(true)

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem('user'))
    API.getProfile(user?.username).then(({ data }) => {
      if (data.hirer) setHirer(true)
      else setHirer(false)
    })
  }, [])

  return (
    <div className="rightbar_card_container">
      <div className="right_bar_card">
        <ul>
          {
            hirer ?
              <>
                <li onClick={() => navigate("/post-job")}>
                  <span>Post Job</span>
                </li>
                <li onClick={() => navigate("/posted-jobs")} >
                  <span>My Job posts</span>
                </li>
              </>
              :
              <li onClick={() => navigate("/become-hirer")} >
                <span>Be a Hirer</span>
              </li>

          }
        </ul>
      </div>
    </div>
  );
};
