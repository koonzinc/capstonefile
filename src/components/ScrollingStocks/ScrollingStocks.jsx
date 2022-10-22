
import React, { useState, useEffect } from "react";
import "./ScrollingStocks.css";
import axios from 'axios';
import {Link} from 'react-router-dom';

const ScrollingStocks = ({aapl}) => {
  
  return (
    <div className="scroll__parent">
       <div style={{ color: 'white' }} className="scroll__element primary">
         <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
         <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
         <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
         <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
         <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
        
       </div>
       <div style={{ color: 'white' }} className="scroll__element secondary">
       <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
       <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
       <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
       <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
       <Link to='/individual-stocks'><a className='tablet symbol'>{aapl}</a></Link>
       </div>
     </div>
  )
}

export default ScrollingStocks

