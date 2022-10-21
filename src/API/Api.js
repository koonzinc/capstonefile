import React, { useState, useEffect } from "react";
import axios from "axios";

const Api = () => {
  const [price, setPrice] = useState("");
  const [close, setClose] = useState([]);
  const URL =
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=XCI1NEPICS3X7H9B";

  useEffect(() => {
    close.length <= 0 && getPrice();

    close.length > 0 && setPrice(close[0][1]["4. close"]);
  }, [close]);

  useEffect(() => {
    console.log(price);
  }, [price]);

  const getPrice = async () => {
    const response = await axios.get(URL);
    const thePrice = response.data["Time Series (Daily)"];
    thePrice && setClose(Object.entries(thePrice));

    console.log(response.data);
  };

  return (
    <div>
      <h1>{price && price}</h1>
    </div>
  );
};

export default Api;
