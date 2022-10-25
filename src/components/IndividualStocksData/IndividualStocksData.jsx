import React, { useState, useEffect, } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const IndividualStocksData = ({ aapl }) => {
  const [price, setPrice] = useState("");
  const [close, setClose] = useState([]);
  const [info, setInfo] = useState({});

  const {stockId} = useParams();

  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockId}&outputsize=full&apikey=KLUR2W3FHJFZTUSR`;
  const companyUrl = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockId}&apikey=KLUR2W3FHJFZTUSR`;

  useEffect(() => {
    close.length <= 0 && getPrice();
    close.length > 0 && setPrice(close[0][1]["4. close"]);
    close.length <= 0 && getInfo();
  }, [close]);

  const getPrice = async () => {
    const response = await axios.get(url);
    const thePrice = response.data["Time Series (Daily)"];

    thePrice && setClose(Object.entries(thePrice));
    console.log(response.data["Time Series (Daily)"])
    console.log(response)
  };
  console.log(price);

  const getInfo = async () => {
    const response = await axios.get(companyUrl);
    setInfo(response.data);

  }
  console.log(info);

  const formatNumber = (param) => {
    return param.toLocaleString(undefined, {minimumFractionDigits:2})
  }

  return (
    <>
      <div className="header-container">
        <h1 className="stock-ticker">{stockId}</h1>
        <div className="btn-container">
          <button className="watch-btn">Watch</button>
        </div>
      </div>
      <div className="container2">This is a chart for a stock</div>
      <div className="data-container">
        <table>
          <thead>
            <tr>
              <th colSpan={4}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              <td className="td-right">{price && price}</td>
              <td>Sector</td>
              <td className="td-right">{info.Sector.toLowerCase()}</td>
            </tr>
            <tr>
              <td>Industry</td>
              <td className="td-right">{info.Industry.toLowerCase()}</td>
              <td>Market Capitalization</td>
              <td className="td-right">{formatNumber(info.MarketCapitalization)}</td>
            </tr>
            <tr>
              <td>Dividend Yield</td>
              <td className="td-right">{info.DividendYield}</td>
              <td>Earnings Per Share</td>
              <td className="td-right">{info.EPS}</td>
            </tr>
            <tr>
              <td>52 Week High</td>
              <td className="td-right">{info["52WeekHigh"]}</td>
              <td>52 Week Low</td>
              <td className="td-right">{info["52WeekLow"]}</td>
            </tr>
            <tr>
              <td>Profit Margin</td>
              <td className="td-right">{info.ProfitMargin}</td>
              <td>Operating Margin</td>
              <td className="td-right">{info.OperatingMarginTTM}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td className="td-foot" colSpan={4}>
                Data delayed by 1 day.
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default IndividualStocksData;
