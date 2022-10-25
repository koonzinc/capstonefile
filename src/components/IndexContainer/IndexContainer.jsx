import React from 'react'
import './IndexContainer.css';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const IndexContainer = () => {
  const options = {
    chart: {
      type: 'line',

      width: 404,
      height: 216, 
      borderRadius: 8
    },
    shadow: {
      color: 'yellow',
      width: 10,
      offsetX: 0,
      offsetY: 0
  },
    title: {
      text: 'NASDAQ 100'
    },
    series: [
      {
        data: [10952, 10575, 11816, 12390, 11028]
      }
    ]
  };

  return (
    <div className="three-index-container">
      <div className="index-container">
        <HighchartsReact className='high-chart' highcharts={Highcharts} options={options} />
      </div>
      <div className="index-container">
      <HighchartsReact className='high-chart' highcharts={Highcharts} options={options} />
      </div>
      <div className="index-container">
      <HighchartsReact className='high-chart' highcharts={Highcharts} options={options} />
      </div>
    </div>
  )
}

export default IndexContainer