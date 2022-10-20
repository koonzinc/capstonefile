import React, { useState, useEffect } from "react";
import axios from "axios";


const Api = () => {
    const [price, setPrice] = useState('');
    const URL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSLA&apikey=FLJHIE0AGGIL5426";
    
    useEffect(() => {
        getPrice();
    }, []);
    
    const getPrice = () => {
        axios.get(URL)
        .then((response) => {
            const thePrice = response.data.close;
            setPrice(thePrice);
        })
        .catch(error => console.error( `Error: ${error}`));

        return (
            <div>
              <h1>{price}</h1>
            </div>
          );
    }}

    export default Api;