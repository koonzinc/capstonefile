import React, { useEffect, useState } from "react";
import "./IndividualStocks.css";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import IndividualStocksData from "../../components/IndividualStocksData/IndividualStocksData";
import axios from "axios";


const IndividualStocks = ({aapl}) => {
  

  return (
    <>
      <NavBar />
      <ScrollingStocks aapl={aapl} />
      <div className="wrapper2">
        <IndividualStocksData aapl={aapl} />
      </div>
    </>
  );
};

export default IndividualStocks;
