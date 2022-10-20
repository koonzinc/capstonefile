import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import ScrollingStocks from '../../components/ScrollingStocks/ScrollingStocks';
import './Home.css';

const Home = () => {
  return (
    <div>
      <NavBar />
      <ScrollingStocks />
      <div className='home-page-container'>
        <div className="three-index-container">
          <div className="index-container"></div>
          <div className="index-container"></div>
          <div className="index-container"></div>
        </div>
        <div className="data-and-post-container">
          <div className="data-tables">
            <div className="data-table-container"></div>
            <div className="data-table-container"></div>
            <div className="data-table-container"></div>
          </div>
          <div className="home-posts-container">
            <div className="posts-header">
              <h1 style={{marginLeft: '1rem', color: 'white'}}>Posts</h1>
            </div>
            <div className="posts-container">
              <img id='post-profile-image' src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg" alt="" />
                    <div className="post-profile-info">
                        <p id='profile-post-name'>William Koonz</p>
                        <p className='light-post' id='profile-post-username'>@williamkoonz •&nbsp;</p>
                        <p className='light-post'>Mar 21</p>
                    </div>
                    <div className="post-headline-info">
                        <h3 class='post-headline'>Bank of America Q3 Earnings - Strong Consumers = Strong Bank</h3>
                        <p className='post-headline'>Bank of America <span className='stock-ticker'>$BAC</span> released their Q3 earnings report pre-market this morning, October 17th. The report surprised (in more ways than one) and sent the stock up 5.62% at the most in pre-market and closed 7.07% after-hours this evening</p>
                    </div>
                    <div className="post-image-container">
                        <img className='post-image' src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg" alt="" />
                    </div>
            </div>
            <div className="posts-container">
              <img id='post-profile-image' src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg" alt="" />
                    <div className="post-profile-info">
                        <p id='profile-post-name'>William Koonz</p>
                        <p className='light-post' id='profile-post-username'>@williamkoonz •&nbsp;</p>
                        <p className='light-post'>Mar 21</p>
                    </div>
                    <div className="post-headline-info">
                        <h3 class='post-headline'>Bank of America Q3 Earnings - Strong Consumers = Strong Bank</h3>
                        <p className='post-headline'>Bank of America <span className='stock-ticker'>$BAC</span> released their Q3 earnings report pre-market this morning, October 17th. The report surprised (in more ways than one) and sent the stock up 5.62% at the most in pre-market and closed 7.07% after-hours this evening</p>
                    </div>
                    <div className="post-image-container">
                        <img className='post-image' src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg" alt="" />
                    </div>
            </div>
            <div className="posts-container">
              <img id='post-profile-image' src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg" alt="" />
                    <div className="post-profile-info">
                        <p id='profile-post-name'>William Koonz</p>
                        <p className='light-post' id='profile-post-username'>@williamkoonz •&nbsp;</p>
                        <p className='light-post'>Mar 21</p>
                    </div>
                    <div className="post-headline-info">
                        <h3 class='post-headline'>Bank of America Q3 Earnings - Strong Consumers = Strong Bank</h3>
                        <p className='post-headline'>Bank of America <span className='stock-ticker'>$BAC</span> released their Q3 earnings report pre-market this morning, October 17th. The report surprised (in more ways than one) and sent the stock up 5.62% at the most in pre-market and closed 7.07% after-hours this evening</p>
                    </div>
                    <div className="post-image-container">
                        <img className='post-image' src="https://business.bofa.com/content/dam/boamlimages/images/bofa-og-logo.jpg" alt="" />
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home