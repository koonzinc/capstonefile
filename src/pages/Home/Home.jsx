import React from 'react'
import DataTables from '../../components/DataTables/DataTables';
import IndexContainer from '../../components/IndexContainer/IndexContainer';
import NavBar from '../../components/NavBar/NavBar';
import Posts from '../../components/Posts/Posts';
import ScrollingStocks from '../../components/ScrollingStocks/ScrollingStocks';
import './Home.css';

const Home = () => {
  return (
    <div>
      <NavBar />
      <ScrollingStocks />
      <div className='home-page-container'>
        <IndexContainer />
        <div className="data-and-post-container">
          <div className="data-tables">
            <DataTables />
            <DataTables />
            <DataTables />
          </div>
          <div className="home-posts-container">
            <div className="posts-header">
              <h1 style={{marginLeft: '1rem', color: 'white'}}>Posts</h1>
            </div>
            <Posts />
            <Posts />
            <Posts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home