import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineBars,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { IconButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import axios from '../../axios';

function NavBar() {
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    let token = localStorage.getItem("userToken");
    if (token) {
      setStatus(true);
    }

    axios
      .get("/validate-token", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUsername(res.data.user_name))
      .catch((err) => console.log(err));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link className="navbar__logo" to="/">
          <h1>goodstocks</h1>
        </Link>
      </div>

      <div className="navbar__right">
        {!status ? (
          <>
            <Link className="navbar__buttons" to="/login">
              <p style={{ marginRight: "1rem" }}>Sign in</p>
            </Link>
            <Link className="navbar__buttons background" to="/signup" replace>
              <p>Sign up</p>
            </Link>
          </>
        ) : null}

        {status ? (
          <>
            <Link className="navbar__buttons" to={`/profile-page/${username}`} replace>
              <p style={{ marginRight: "1rem" }}>Profile</p>
            </Link>
            <Link
              className="navbar__buttons background"
              to="/"
              onClick={handleLogout}
            >
              <p style={{ paddingTop: "2px" }}>Sign out</p>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
