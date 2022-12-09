import { Group, People, RssFeed, Work } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../../../redux/actions/users";
import * as API from '../../../api/index'


import "./rightbar.scss";

export const RightBar = () => {
  const navigate = useNavigate();
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
              <Link to='/post-job' >
                <li>
                  <span>Post Job</span>
                </li>
              </Link>
              <Link to='/posted-jobs' >
                <li >
                  <span>My Job posts</span>
                </li>
              </Link>
              </>
              :
              <Link to='/become-hirer'>
              <li onClick={() => navigate("/become-hirer")} >
                <span>Be a Hirer</span>
              </li>
              </Link>

          }
          <Link to='/chats' >
          <li>
            <span>Chat</span>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
