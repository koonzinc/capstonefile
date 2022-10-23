import React from "react";
import "./Pill.css";
import { Link } from "react-router-dom";

export default function Pill() {
  return (
    <Link to="/individual-stocks" replace>
      <div className="pill__wrapper">
        <span>TSLA </span>
        <span>$217.14</span>
      </div>
    </Link>
  );
}
