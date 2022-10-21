
import React, { useState, useEffect } from "react";
import "./ScrollingStocks.css";
import axios from 'axios';
import {Link} from 'react-router-dom';

function ScrollingStocks() {
  const [symbol, setSymbol] = useState('')

  const url = 'https://finnhub.io/api/v1/search?q=AAPL&token=cd9g9uaad3i97v8iuvfgcd9g9uaad3i97v8iuvg0'

  useEffect(() => {
    getSymbol();
  }, [])

  const getSymbol = async () => {
    const response = await axios.get(url);
    const theSymbol = response.data.result[0].symbol;
    setSymbol(theSymbol);

  }

  return (
    <div className="scroll__parent">
      <div style={{ color: 'white' }} className="scroll__element primary">
        <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
        <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
        <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
        <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
        <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
        
      </div>
      <div style={{ color: 'white' }} className="scroll__element secondary">
      <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
      <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
      <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
      <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
      <Link to='/individual-stocks'><a className='tablet symbol'>{symbol}</a></Link>
      </div>
    </div>
  );
}

export default ScrollingStocks;