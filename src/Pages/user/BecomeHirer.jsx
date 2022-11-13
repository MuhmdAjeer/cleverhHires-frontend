import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { becomeHirer } from "../../actions/hire";

import Navbar from "../../components/NavBar/Navbar";
import "./becomeHirer.scss";

function BecomeHirer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = JSON.parse(localStorage.getItem("user"));
  const [role, setRole] = useState();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const handleSubmit = () => {
    dispatch(becomeHirer(form, navigate, setLoading));
  };
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="become_hire_left">
          <div>
            <h1>
              Become a<br />
              Hirer!
            </h1>
            <p>Hire from millions of talent from all over the world</p>
          </div>
        </div>

        <div className="become_hire_right">
          <div className="hirer_form">
            <div>
              <TextField
                onChange={handleChange}
                name="company"
                fullWidth
                size="small"
                label="Company"
                variant="filled"
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                onChange={handleChange}
                name="country"
                fullWidth
                size="small"
                label="Country"
                variant="filled"
                sx={{ marginBottom: "15px" }}
              />

              <TextField
                onChange={handleChange}
                name="industry"
                fullWidth
                size="small"
                label="Industry"
                variant="filled"
                sx={{ marginBottom: "15px" }}
              />

              <Button
                disabled={loading}
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  borderRadius: "20px",
                  width: "100%",
                  height: "50px",
                  mt: "10px",
                  boxShadow: 0,
                }}
              >
                Request to be a hirer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BecomeHirer;
