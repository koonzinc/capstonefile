import React, { useEffect } from "react";
import "./DataTables.css";
import Pill from "../Pill/Pill";
import { Link } from "react-router-dom";

const DataTables = ({ watchlistData }) => {
  console.log(watchlistData[0].stock)
  return (
    <div className="data-table-container">
      <Link to="/individual-stocks" replace>
        <div className="pill__wrapper">
          <span>{watchlistData[0].stock}</span>
        </div>
      </Link>
    </div>
  );
};

export default DataTables;
