import React, { useEffect, useState } from "react";
import DataTables from "../../components/DataTables/DataTables";
import IndexContainer from "../../components/IndexContainer/IndexContainer";
import NavBar from "../../components/NavBar/NavBar";

import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import "./Home.css";
import SocialPosts from "../../components/SocialPost/SocialPosts";
import { BsPencilSquare } from "react-icons/bs";
import "../../components/Posts/Posts.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Home = ({ aapl, postData }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <NavBar />
      {modal ? <SocialPosts modal={modal} handleModal={handleModal} /> : null}
      <div className="home-page-container">
        <ScrollingStocks aapl={aapl} />
        <IndexContainer />
        <div className="data-and-post-container">
          <div className="data-tables">
            <DataTables />
          </div>
          <div className="home-posts-container">
            <div className="posts-header">
              <h1>Posts</h1>
              <BsPencilSquare
                onClick={handleModal}
                style={{ margin: "auto 0", cursor: "pointer" }}
                size={30}
              />
            </div>
            {postData.map((post, i) => (
              <div className="posts-container">
                <img
                  id="post-profile-image"
                  src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
                  alt=""
                />
                <div className="post-profile-info">
                  <p id="profile-post-name">William Koonz</p>
                  <p className="light-post" id="profile-post-username">
                    @williamkoonz •&nbsp;
                  </p>
                  <p className="light-post">{postData[i].date_stamp}</p>
                </div>
                <div className="post-headline-info">
                  <h3 class="post-headline">{postData[i].headline}</h3>
                  <p className="post-headline">{postData[i].content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
