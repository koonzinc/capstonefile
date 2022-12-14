import React, { useState, useEffect } from "react";
import "./ScrollingStocks.css";
// import axios from 'axios';
import { Link } from "react-router-dom";

const ScrollingStocks = () => {
  return (
    <div className="scroll__parent">
      <div style={{ color: "white" }} className="scroll__element primary">
        <Link className="scrolling__links" to="/individual-stocks/AAPL">
          <a className="tablet symbol">AAPL</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/TSLA">
          <a className="tablet symbol">TSLA</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/MSFT">
          <a className="tablet symbol">MSFT</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/AMZN">
          <a className="tablet symbol">AMZN</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/UBER">
          <a className="tablet symbol">UBER</a>
        </Link>
      </div>
      <div style={{ color: "white" }} className="scroll__element secondary">
        <Link className="scrolling__links" to="/individual-stocks/AAPL">
          <a className="tablet symbol">AAPL</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/TSLA">
          <a className="tablet symbol">TSLA</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/msft">
          <a className="tablet symbol">MSFT</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/amzn">
          <a className="tablet symbol">AMZN</a>
        </Link>
        <Link className="scrolling__links" to="/individual-stocks/uber">
          <a className="tablet symbol">UBER</a>
        </Link>
      </div>
    </div>
  );
};

export default ScrollingStocks;
