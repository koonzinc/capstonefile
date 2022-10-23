import React from "react";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__logo">FMA</h1>
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search"
        />

        <AiOutlineSearch className="header__searchIcon" />
      </div>

      <div className="navbar__left">
        <Link to="/signup" replace>
          {" "}
          <AiOutlineBars className="navbar__leftMenu" />
        </Link>

        <Link to="/profile-page" replace>
          <BsPerson />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
